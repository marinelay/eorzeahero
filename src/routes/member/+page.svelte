<script>
    import Navbar from '../Navbar.svelte';
    import { Card, Avatar, Button, Tabs, TabItem } from 'flowbite-svelte';

    import members from '$lib/assets/member/members.json'
</script>

<Navbar/>


<div class="tab-container">
<Tabs tabStyle="underline">
    <TabItem open>
        {#snippet titleSlot()}
            <span class="text-xl">현역 용사</span>
        {/snippet}
        <!-- iter members -->
        <div class="card-container pt-8">
        {#each members as member}
            <Card class="w-50 h-75 p-3 sm:p-3 min-w-40 max-w-50">
                <div class="flex flex-col items-center">
                    <div class="w-40 h-40 mb-4 overflow-hidden rounded-full"> 
                        <img class="w-full h-full" src={member.image} alt="product 1" />
                    </div>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{member.desc}</span>
                </div>
            </Card>
        {/each}
        </div>
    </TabItem>
    <TabItem>
        {#snippet titleSlot()}
            <span class="text-xl">별바다 용사</span>
        {/snippet}
        <!-- iter members -->
        <div class="card-container pt-8">
            {#each members as member}
                <Card class="w-50 h-75 p-3 sm:p-3 min-w-40 max-w-50">
                    <div class="flex flex-col items-center">
                        <div class="w-40 h-40 mb-4 overflow-hidden rounded-full"> 
                            <img class="w-full h-full" src={member.image} alt="product 1" />
                        </div>
                        <!-- <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{member.desc}</span> -->
                    </div>
                </Card>
            {/each}
        </div>
    </TabItem>
</Tabs>
</div>


<style>
    .tab-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        flex-wrap: wrap;
    }

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
        /* max-height: 200px; */
        object-fit: cover;
        object-position: 50% 25%;
    }
</style>