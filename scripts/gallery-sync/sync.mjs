import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, '../..');
const manifestPath = path.join(root, 'src/lib/assets/gallery/discord-images.json');
const outputDirectory = path.join(root, 'static/images/gallery/discord');
const maximumSourceBytes = 25 * 1024 * 1024;

async function loadLocalEnvironment() {
	const envPath = path.join(root, '.env');
	if (!existsSync(envPath)) return;

	const contents = await readFile(envPath, 'utf8');
	for (const line of contents.split(/\r?\n/)) {
		const match = line.match(/^\s*(DISCORD_BOT_TOKEN|DISCORD_GALLERY_CHANNEL_ID)\s*=\s*(.+?)\s*$/);
		if (!match || process.env[match[1]]) continue;

		const value = match[2].replace(/^(['"])(.*)\1$/, '$2');
		process.env[match[1]] = value;
	}
}

function isImageAttachment(attachment) {
	return (
		attachment.content_type?.startsWith('image/') ||
		/\.(avif|gif|jpe?g|png|webp)$/i.test(attachment.filename)
	);
}

async function fetchAllMessages(token, channelId) {
	const messages = [];
	let before;

	while (true) {
		const params = new URLSearchParams({ limit: '100' });
		if (before) params.set('before', before);

		const response = await fetch(
			`https://discord.com/api/v10/channels/${channelId}/messages?${params}`,
			{ headers: { Authorization: `Bot ${token}` } }
		);

		if (!response.ok) {
			throw new Error(`Discord API 요청 실패: ${response.status} ${await response.text()}`);
		}

		const page = await response.json();
		messages.push(...page);
		if (page.length < 100) break;

		before = page.at(-1).id;
	}

	return messages;
}

async function convertAttachment(attachment, destination) {
	if (attachment.size > maximumSourceBytes) {
		throw new Error(`파일이 25MB를 초과합니다: ${attachment.filename}`);
	}

	const response = await fetch(attachment.url);
	if (!response.ok) {
		throw new Error(`이미지 다운로드 실패: ${response.status}`);
	}

	const source = Buffer.from(await response.arrayBuffer());
	if (source.length > maximumSourceBytes) {
		throw new Error(`다운로드된 파일이 25MB를 초과합니다: ${attachment.filename}`);
	}

	await sharp(source, { animated: true })
		.rotate()
		.resize({ width: 1920, withoutEnlargement: true })
		.webp({ quality: 82, effort: 4 })
		.toFile(destination);
}

await loadLocalEnvironment();

const token = process.env.DISCORD_BOT_TOKEN;
const channelId = process.env.DISCORD_GALLERY_CHANNEL_ID;

if (!token || !channelId) {
	throw new Error('DISCORD_BOT_TOKEN과 DISCORD_GALLERY_CHANNEL_ID가 필요합니다.');
}

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const savedIds = new Set(manifest.map((image) => image.id));
const messages = await fetchAllMessages(token, channelId);
const candidates = messages
	.flatMap((message) =>
		message.attachments
			.filter(isImageAttachment)
			.map((attachment) => ({ message, attachment }))
	)
	.filter(({ attachment }) => !savedIds.has(attachment.id))
	.sort(
		(a, b) =>
			Date.parse(a.message.timestamp) - Date.parse(b.message.timestamp)
	);

if (candidates.length === 0) {
	console.log('새로 저장할 Discord 사진이 없습니다.');
	process.exit(0);
}

await mkdir(outputDirectory, { recursive: true });
const added = [];

for (const { message, attachment } of candidates) {
	const filename = `${attachment.id}.webp`;
	const destination = path.join(outputDirectory, filename);

	try {
		await convertAttachment(attachment, destination);
		added.push({
			id: attachment.id,
			src: `/images/gallery/discord/${filename}`,
			alt: attachment.description || message.content || '디스코드에서 공유한 사진',
			publishedAt: message.timestamp
		});
		console.log(`저장 완료: ${attachment.filename} → ${filename}`);
	} catch (error) {
		console.error(`저장 실패: ${attachment.filename}`, error);
	}
}

if (added.length === 0) {
	throw new Error('새 사진을 WebP로 변환하지 못했습니다.');
}

const nextManifest = [...added, ...manifest].sort(
	(a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
);
await writeFile(manifestPath, `${JSON.stringify(nextManifest, null, 2)}\n`);

console.log(`총 ${added.length}장의 새 사진을 갤러리에 추가했습니다.`);
