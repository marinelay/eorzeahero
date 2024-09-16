<script>
    import { Carousel } from 'flowbite-svelte';
    import images from './imageData/carousels.json';
    import { Heading, P, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { Blockquote } from 'flowbite-svelte';
    import { QuoteSolid } from 'flowbite-svelte-icons';

    import { page } from '$app/stores';
    // import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

    import Navbar from './Navbar.svelte';
</script>

<Navbar/>

<div class="text-center">
<Heading tag="h1" class="mt-8 mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
    에오르제아 용사
</Heading>
<P class="text-center mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    용사들이 모인 공간입니다. 여러분들의 이야기를 들려주세요.
</P>
<!-- <Button href="/">
    Learn more
    <ArrowRightOutline class="w-6 h-6 ms-2" />
</Button> -->
</div>

<div class="max-w-4xl container">
<Carousel {images} let:Indicators let:Controls duration={6000}>
    <Controls />
    <Indicators />
</Carousel>
</div>


<figure class="mt-8 mx-auto max-w-screen-md text-center">
<QuoteSolid class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" />
<Blockquote alignment="center" size="xl">
    겁쟁이는 죽기 전에 여러 번 죽지만, 용사는 한 번밖에 죽지 않소. <br/>
    - 윌리엄 셰익스피어
</Blockquote>

</figure>


<style>
.container {
    margin: 0 auto;
}
</style>