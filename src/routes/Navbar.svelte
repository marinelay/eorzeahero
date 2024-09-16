<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

    import { Badge } from 'flowbite-svelte';
    import { ClockSolid } from 'flowbite-svelte-icons';
    
</script>

<Navbar class="border px-5 py-2 rounded-lg bg-gray-100">
    <NavBrand href="/">
        <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
        <span class="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">Eorzea Hero</span>
    </NavBrand>

    
    <NavUl {activeUrl}>
        <NavLi href="/" class="text-2xl">Home</NavLi>
        <NavLi href="/member" class="text-2xl">Member</NavLi>
        <NavLi href="/gallery" class="text-2xl">Gallery</NavLi>
    </NavUl>
</Navbar>