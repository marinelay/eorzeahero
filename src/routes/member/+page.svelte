<script>
    import Navbar from '../Navbar.svelte';
    import { Card, Avatar, Button } from 'flowbite-svelte';

    import members from '$lib/assets/member/members.json'
</script>

<Navbar/>

<div class="card-container pt-8">

<!-- iter members -->
{#each members as member}
    <Card class='card' padding="md">
        <div class="flex flex-col items-center">
            <img class="p-2 pb-8 rounded-t-lg" src={member.image} alt="product 1" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{member.desc}</span>
            <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
            <!-- <Button>Add friend</Button>
            <Button color="light" class="dark:text-white">Message</Button> -->
            </div>
        </div>
    </Card>
{/each}

</div>

<style>
    .card-container {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
        gap: 16px;
        flex-wrap: wrap; /* 필요한 경우 여러 줄로 표시 */
    }


    img {
        max-width: 100%;
        max-height: 200px;
        object-fit: cover;
    }
</style>