import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

type DiscordAttachment = {
	id: string;
	url: string;
	proxy_url: string;
	filename: string;
	content_type: string | null;
	description: string | null;
};

type DiscordMessage = {
	id: string;
	content: string;
	timestamp: string;
	attachments: DiscordAttachment[];
	embeds: Array<{
		image?: { url?: string };
		thumbnail?: { url?: string };
		url?: string;
		type?: string;
	}>;
};

/**
 * 사진 전용 디스코드 채널의 첨부파일만 공개 갤러리용 데이터로 변환한다.
 * 봇 토큰은 이 서버 라우트에서만 사용되며, 브라우저에는 절대 전달되지 않는다.
 */
export async function GET({ url, platform }) {
	// Cloudflare Pages에서는 Secret이 platform.env로 제공되고,
	// 로컬 개발 환경에서는 .env 값을 사용한다.
	const discordBotToken = platform?.env.DISCORD_BOT_TOKEN || env.DISCORD_BOT_TOKEN;
	const discordGalleryChannelId = platform?.env.DISCORD_GALLERY_CHANNEL_ID || env.DISCORD_GALLERY_CHANNEL_ID;

	if (!discordBotToken || !discordGalleryChannelId) {
		return json({ photos: [], configured: false });
	}

	const response = await fetch(
		`https://discord.com/api/v10/channels/${discordGalleryChannelId}/messages?limit=100`,
		{
			headers: { Authorization: `Bot ${discordBotToken}` }
		}
	);

	if (!response.ok) {
		return json({ photos: [], configured: true }, { status: 502 });
	}

	const messages = (await response.json()) as DiscordMessage[];
	const attachments = messages.flatMap((message) =>
		message.attachments.map((attachment) => ({ message, attachment }))
	);
	const imageAttachments = attachments.filter(({ attachment }) =>
		attachment.content_type?.startsWith('image/') || /\.(avif|gif|jpe?g|png|webp)$/i.test(attachment.filename)
	);
	const embeddedImages = messages.flatMap((message) =>
		message.embeds
			.map((embed) => embed.image?.url || (embed.type === 'image' ? embed.url : undefined))
			.filter((src): src is string => Boolean(src))
			.map((src, index) => ({
				id: `${message.id}-embed-${index}`,
				src,
				alt: message.content || '디스코드에서 공유한 이미지',
				publishedAt: message.timestamp
			}))
	);
	const photos = [
		...imageAttachments
		.map(({ message, attachment }) => ({
			id: attachment.id,
			src: attachment.url,
			alt: attachment.description || message.content || '디스코드에서 공유한 사진',
			publishedAt: message.timestamp
		})),
		...embeddedImages
	]
		.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

	const diagnostic = url.searchParams.get('debug') === '1'
		? {
			messagesScanned: messages.length,
			attachmentsScanned: attachments.length,
			imageAttachmentsFound: imageAttachments.length,
			embeddedImagesFound: embeddedImages.length
		}
		: undefined;

	return json({ photos, configured: true, diagnostic }, {
		headers: {
			// 디스코드 API 호출을 줄이면서 새 사진은 빠르게 반영한다.
			'cache-control': 'public, max-age=300, s-maxage=300'
		}
	});
}
