import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
	    __BUILD_DATE__: JSON.stringify(new Date().toISOString().split('T')[0]), // 날짜까지만 표시
	  },
});
