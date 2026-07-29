<script lang="ts">
	import { Badge, Blockquote, Hr, P, Span, Timeline, TimelineItem, Tooltip } from 'flowbite-svelte';
	import { ClockSolid, HomeOutline, QuoteSolid } from 'flowbite-svelte-icons';
	import Navbar from './Navbar.svelte';

	const buildDate = __BUILD_DATE__;
</script>

<svelte:head>
	<title>에오르제아의 용사들</title>
	<meta name="description" content="톤베리의 자유부대 &lt;에용&gt;" />
</svelte:head>

<Navbar />

<main class="main">
	<section class="intro-section">
		<div class="intro-copy">
			<p class="eyebrow">FREE COMPANY &lt;에용&gt; · TONBERRY</p>
			<img src="/images/title.webp" alt="에오르제아의 용사들" class="title-image" />
			<div class="welcome-text"><P>용사들이 모인 공간입니다. 용사라면 누구나 <Span highlight="blue">환영</Span>합니다.</P></div>
			<figure class="quote">
				<Blockquote size="xl">
					<QuoteSolid class="mb-3 w-10 h-10 text-gray-400" />
					죽음도 불사하며 죽어간 용사들의 용기를 과소평가하지 않는 것처럼, 우리 또한 용사들이 삶으로 보여준 용맹함을 잊지 말아야 한다.
				</Blockquote>
				<figcaption>존 F. 케네디</figcaption>
			</figure>
			<p class="intro-meta">EST. 2023 · 함께하는 모든 모험을 기록합니다.</p>
		</div>
		<a class="hero-image" href="/gallery" aria-label="용사들 모음집 보기">
			<img src="/images/carousel/carousel1.webp" alt="에오르제아의 용사들 단체 사진" />
			<span>용사들 모음집 <b aria-hidden="true">↗</b></span>
		</a>
	</section>

	<div class="rule"><Hr /></div>

	<section class="history" aria-labelledby="history-title">
		<p class="history-label">OUR STORY · 2023 — NOW</p>
		<h1 id="history-title">용사들의 발자취</h1>
		<Timeline>
			<TimelineItem title="용사하우스 확장 이전" date="2026. 01. 18">
				<p>작은 시작은 마침내 거대한 터전이 되었다. 용사하우스는 또 한 번 도약하였고, 이제 용사들은 더욱 넓어진 공간에서 더 큰 모험과 전설을 향해 나아가리라!<br /><br /><HomeOutline /> 에오르제아 용사하우스, 시로가네 12구 30번지, 톤베리</p>
			</TimelineItem>
			<TimelineItem title="용사하우스 축소 이전" date="2025. 11. 07">
				<p>용사하우스가 한번 더 새로운 터전으로 이전하였다! 이제 더욱 좁아진 공간에서 비빌 틈 없는 용사들은, 땀범벅과 눈물로 밝은 미래를 향해 나아갈 것이다!<br /><br /><HomeOutline /> 에오르제아 용사하우스, 안갯빛마을 4구 3번지, 톤베리</p>
			</TimelineItem>
			<TimelineItem title="용사하우스 확장 이전" date="2024. 10. 15">
				<p>용사하우스가 새로운 터전으로 이전하였다! 이제 더욱 광활한 공간에서 전설을 써 내려갈 용사들은, 불굴의 의지와 단단한 동맹으로 거대한 모험을 향해 나아갈 것이다!<br /><br /><HomeOutline /> 에오르제아 용사하우스, 시로가네 13구 31번지, 톤베리</p>
			</TimelineItem>
			<TimelineItem title="디스코드 서버 생성" date="2024. 09. 26"><p>이제 용사들은 이곳에서 실시간으로 소통하며, 전략을 공유하고, 전투의 흐름을 조율할 수 있는 강력한 커뮤니케이션 도구를 얻게 되었다!</p></TimelineItem>
			<TimelineItem title="홈페이지 개설" date="2024. 09. 17"><p>용사들은 홈페이지를 개설하여 연대를 더욱 굳건히 하였다! 그들의 힘과 지혜가 더욱 강력하게 결집되어, 새로운 도전이 기다리고 있다!</p></TimelineItem>
			<TimelineItem title="용사하우스 개방" date="2024. 08. 31"><p>모든 용사들이 모여 전략을 논의하고, 전투의 피로를 풀며, 새로운 동맹을 맺을 수 있는 거점이 마련되었다.<br /><br /><HomeOutline /> 에오르제아 용사하우스, 안개빛 마을 2구 41번지, 톤베리</p></TimelineItem>
			<TimelineItem title="자유부대 &lt;에용&gt; 설립" date="2023. 04. 03"><p>위대한 용사들의 만남이 시작되었다! 이제 각자의 운명을 연결할 모험이 펼쳐칠 차례다!</p></TimelineItem>
		</Timeline>
	</section>

	<div class="updated">
		<Badge large color="blue" border id="ack"><ClockSolid class="w-3.5 h-3.5 me-1.5" />Updated on {buildDate}</Badge>
		<Tooltip trigger="click" triggeredBy="#ack" placement="bottom">Thanks to Sambyeol</Tooltip>
	</div>
</main>

<style>
	:global(body) { margin: 0; background: linear-gradient(180deg, #f8fafc 0, #fff 44rem); color: #24313a; font-family: Pretendard, 'Apple SD Gothic Neo', system-ui, sans-serif; }
	.main { padding: clamp(1.6rem, 4vw, 3.5rem) 1.25rem 4.5rem; }
	.intro-section { width: min(1120px, 100%); margin: 0 auto; padding: clamp(1.4rem, 3.5vw, 3rem); display: grid; grid-template-columns: minmax(280px, .82fr) minmax(0, 1.18fr); gap: clamp(2rem, 5vw, 4.5rem); align-items: center; border: 1px solid #e5e9ed; border-radius: 1.25rem; background: rgba(255, 255, 255, .8); box-shadow: 0 18px 50px rgba(31, 41, 55, .07); }
	.intro-copy { padding: .4rem 0; }.eyebrow, .history-label { margin: 0 0 1rem; color: #75818a; font-size: .68rem; font-weight: 800; letter-spacing: .12em; }.title-image { display: block; width: min(100%, 380px); margin-bottom: 1.35rem; }.welcome-text { line-height: 1.75; color: #53606a; }
	.quote { margin: 2.15rem 0 0; padding: 1.25rem 1.3rem; border-left: 3px solid #a4b4c4; background: #f7f9fb; }.quote figcaption { margin-top: 1.1rem; color: #6b7280; font-size: .82rem; text-align: right; }.intro-meta { margin: 1.6rem 0 0; color: #8a969e; font-size: .72rem; letter-spacing: .04em; }
	.hero-image { position: relative; display: block; min-width: 0; min-height: 370px; overflow: hidden; border-radius: .85rem; box-shadow: 0 15px 32px rgba(31, 41, 55, .16); background: #dfe5e8; }.hero-image img { display: block; width: 100%; height: 100%; min-height: 370px; object-fit: cover; transition: transform .35s ease; }.hero-image:hover img { transform: scale(1.025); }.hero-image span { position: absolute; right: 1rem; bottom: 1rem; padding: .55rem .75rem; border-radius: .35rem; background: rgba(24, 35, 44, .78); color: #fff; font-size: .78rem; font-weight: 700; }.hero-image b { margin-left: .45rem; }
	.rule { width: min(72%, 420px); margin: 4.7rem auto; }
	.history { width: min(700px, 100%); margin: 0 auto; padding: clamp(1.35rem, 3vw, 2.4rem); border: 1px solid #e7ebee; border-radius: 1rem; background: #fff; }.history-label { margin-bottom: .35rem; }.history h1 { margin: 0 0 2.2rem; color: #273845; font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 700; letter-spacing: -.04em; }.history :global(.text-gray-500) { color: #58646d; line-height: 1.75; }
	.updated { margin-top: 3.4rem; text-align: center; }
	@media (max-width: 760px) { .main { padding-top: 1.25rem; }.intro-section { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.25rem; border-radius: .9rem; }.intro-copy { order: 1; }.hero-image { order: 2; min-height: 270px; }.hero-image img { min-height: 270px; }.quote { margin-top: 1.8rem; }.rule { margin: 3.3rem auto; }.history { padding: 1.25rem; }.history h1 { margin-bottom: 1.5rem; } }
</style>
