<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;
</script>

<Navbar class="border px-5 py-2 bg-gray-100">
    <NavBrand href="/">
        <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
        <span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">자유부대 &lt;에용&gt;</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
        <NavLi href="/" class="text-xl">Home</NavLi>
        <NavLi href="/member" class="text-xl">Member</NavLi>
        <NavLi href="/gallery" class="text-xl">Gallery</NavLi>
    </NavUl>
</Navbar>