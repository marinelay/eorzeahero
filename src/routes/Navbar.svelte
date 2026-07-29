<script lang="ts">
	import { page } from '$app/stores';
	let menuOpen = false;
	const links = [
		{ href: '/', label: '홈' },
		{ href: '/member', label: '용사들' },
		{ href: '/gallery', label: '추억' }
	];
</script>

<nav aria-label="주요 메뉴">
	<a href="/" class="brand" aria-label="에오르제아의 용사들 홈">
		<span class="crest">✦</span><span>에오르제아의 용사들</span>
	</a>
	<button class="menu-button" onclick={() => (menuOpen = !menuOpen)} aria-expanded={menuOpen} aria-label="메뉴 열기">
		<span></span><span></span>
	</button>
	<div class:open={menuOpen} class="links">
		{#each links as link}
			<a href={link.href} class:active={$page.url.pathname === link.href} onclick={() => (menuOpen = false)}>{link.label}</a>
		{/each}
	</div>
</nav>

<style>
	nav { height: 70px; max-width: 1370px; margin: auto; padding: 0 clamp(1.4rem, 5vw, 5rem); display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 10; }
	.brand { display: flex; align-items: center; gap: .55rem; color: #283830; text-decoration: none; font-size: .95rem; font-weight: 800; letter-spacing: -.04em; }.crest { color: #b5543e; font-size: 1.25rem; }
	.links { display: flex; align-items: center; gap: 2rem; }.links a { color: #6b746d; font-size: .83rem; font-weight: 700; text-decoration: none; }.links a.active, .links a:hover { color: #b5543e; }
	.menu-button { display: none; background: none; border: 0; padding: .4rem; }.menu-button span { display: block; width: 21px; height: 1px; margin: 5px; background: #273a34; }
	@media (max-width: 600px) {
		.menu-button { display: block; }
		.links { display: none; position: absolute; top: 61px; left: 1.4rem; right: 1.4rem; padding: .45rem; background: #273a34; flex-direction: column; align-items: stretch; gap: .15rem; box-shadow: 0 10px 22px rgba(0, 0, 0, .16); }
		.links.open { display: flex; }
		.links a { display: block; width: 100%; padding: .8rem .9rem; border-radius: .3rem; color: #e9e6dd; }
		.links a:hover, .links a.active { background: rgba(255, 255, 255, .11); color: #fff; }
	}
</style>
