<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

    
</script>

<Navbar>
    <NavBrand href="/">
        <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
        <span class="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">Eorzea Hero</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
        <NavLi href="/" class="text-2xl">Home</NavLi>
        <NavLi href="/member" class="text-2xl">Member</NavLi>
        <NavLi href="/gallery" class="text-2xl">Gallery</NavLi>
    </NavUl>
</Navbar>
    

