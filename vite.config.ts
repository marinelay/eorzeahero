import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
        	__build_date__: JSON.stringify(new Date().toUTCString()),
    	},
});
