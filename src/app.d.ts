// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	const __BUILD_DATE__: string;

	namespace App {
		interface Platform {
			env: {
				DISCORD_BOT_TOKEN?: string;
				DISCORD_GALLERY_CHANNEL_ID?: string;
			};
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
