<script>
    import { Carousel, CarouselIndicators, Controls } from 'flowbite-svelte';
    import images from './imageData/carousels.json';
    import { Heading, P, Button, Tooltip } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { Blockquote } from 'flowbite-svelte';
    import { QuoteSolid } from 'flowbite-svelte-icons';

    import { Badge, Hr, Span } from 'flowbite-svelte';
    import { ClockSolid } from 'flowbite-svelte-icons';

    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { CalendarWeekSolid, HomeOutline } from 'flowbite-svelte-icons';

    import { page } from '$app/stores';

    // import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

    import Navbar from './Navbar.svelte';

    const buildDate = __BUILD_DATE__;
</script>

<Navbar/>

<div class='main'>

<div class="divider-wrapper">
<div class="divider mt-8">
<div class="one-third mr-4">


    <img src="/images/title.webp" class="mb-4"/>
    <!-- <Heading tag="h1" class="mt-8 mb-4 text-orange-400">
        에오르제아의 용사들
    </Heading> -->
    <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">
        용사들이 모인 공간입니다. 용사라면 누구나 <Span highlight="blue">환영</Span>합니다.
    </P>
    
    <figure class="mt-8 mb-8 mx-auto max-w-screen-md">
    
    <Blockquote size="xl">
        <QuoteSolid class="mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" />
        죽음도 불사하며 죽어간 용사들의 용기를 과소평가 하지 않는 것처럼, 우리 또한 용사들이 삶으로 보여준 용맹함을 잊지 말아야 한다.
    </Blockquote>
    <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
          <cite class="pe-3 font-medium text-gray-900 dark:text-white">존 F. 케네디</cite>
        </div>
      </figcaption>
    </figure>
</div>
<div class="two-thirds ml-4">

<div class="max-w-4xl">
<Carousel {images} duration={6000}>
    <Controls/>
    <CarouselIndicators/>
</Carousel>
</div>
</div>  
</div>
</div>

<Hr class="w-72 h-1 mx-auto my-4 rounded md:my-10" />

<div class="timeline-wrapper">
<div class="timeline-container">
<Timeline>
    <TimelineItem title="용사하우스 축소 이전" date="2025. 11. 07">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">용사하우스가 한번 더 새로운 터전으로 이전하였다! 이제 더욱 좁아진 공간에서 비빌 틈 없는 용사들은, 땀범벅과 눈물로 밝은 미래를 향해 나아갈 것이다! 이곳든 그들의 전설이 시작될 진정한 장소가 되리라!
        <br/><br/>
    
        <HomeOutline/>에오르제아 용사하우스, 안갯빛마을 4구 3번지, 톤베리
    </p>
    </TimelineItem>
    <TimelineItem title="용사하우스 확장 이전" date="2024. 10. 15">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">용사하우스가 새로운 터전으로 이전하였다! 이제 더욱 광활한 공간에서 전설을 써 내려갈 용사들은, 불굴의 의지와 단단한 동맹으로 거대한 모험을 향해 나아갈 것이다! 이곳은 그들의 신화가 시작될 진정한 성지가 되리라!
        <br/><br/>
    
        <HomeOutline/>에오르제아 용사하우스, 시로가네 13구 31번지, 톤베리
    </p>
    </TimelineItem>
    <TimelineItem title="디스코드 서버 생성" date="2024. 09. 26">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">이제 용사들은 이곳에서 실시간으로 소통하며, 전략을 공유하고, 전투의 흐름을 조율할 수 있는 강력한 커뮤니케이션 도구를 얻게 되었다!</p>
      </TimelineItem>
      <TimelineItem title="홈페이지 개설" date="2024. 09. 17">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">용사들은 홈페이지를 개설하여 연대를 더욱 굳건히 하였다! 그들의 힘과 지혜가 더욱 강력하게 결집되어, 새로운 도전이 기다리고 있다!</p>
      </TimelineItem>
      <TimelineItem title="용사하우스 개방" date="2024. 08. 31">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            모든 용사들이 모여 전략을 논의하고, 전투의 피로를 풀며, 새로운 동맹을 맺을 수 있는 거점이 마련되었다. 용사들의 휴식과 교류의 장이 되리라!
            <br/><br/>
            <HomeOutline/>에오르제아 용사하우스, 안개빛 마을 2구 41번지, 톤베리
        </p>
      </TimelineItem>
    
    <TimelineItem title="자유부대 <에용> 설립" date="2023. 04. 03">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">위대한 용사들의 만남이 시작되었다! 이제 각자의 운명을 연결할 모험이 펼쳐칠 차례다!</p>
    </TimelineItem>
    
    
  </Timeline>
</div>
</div>

<div class="text-center">
    <!-- <Heading tag="h1" class="mt-8 mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
        에오르제아 용사
    </Heading>
    <P class="text-center mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        용사들이 모인 공간입니다. 용사라면 누구나 환영합니다.
    </P> -->

        <Badge large color="blue" border class="mb-8" id="ack">
            <ClockSolid class="w-3.5 h-3.5 me-1.5" />
            Updated on {buildDate}
        </Badge>
        <Tooltip trigger="click" triggeredBy="#ack" placement='bottom'>Thanks to Sambyeol</Tooltip>
    <!-- <Button href="/">
        Learn more
        <ArrowRightOutline class="w-6 h-6 ms-2" />
    </Button> -->
    </div>


</div>


<style>

.main {
    width: 100%;
    align-items: center;
    justify-content: center; /* 가로 중앙 정렬 */
    margin:auto;
}

.container {
    margin: 0 auto;
}

.divider-wrapper {
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
}

.timeline-wrapper {
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    flex-wrap: wrap; /* 작을 때 세로로 쌓일 수 있도록 허용 */
    padding: 0 16px; /* 좌우 여백 */
}

.timeline-container {
    width: 33%;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
}

.divider {
    display: flex;
    width: 60%;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    flex-wrap: wrap; /* 작을 때 세로로 쌓일 수 있도록 허용 */
    padding: 0 16px; /* 좌우 여백 */
}

.two-thirds {
flex: 4; /* 2/3의 비율 */
/* background-color: lightblue; */
}

.one-third {
flex: 3; /* 1/3의 비율 */
/* background-color: lightcoral; */
}

/* 반응형 디자인 */
@media (max-width: 768px) {
    .timeline-container,
    .divider {
        width:90%;
    }
    .two-thirds,
    .one-third {
        flex: 100%; /* 작은 화면에서는 모두 가로 폭을 100%로 설정 */
}
}

</style>
