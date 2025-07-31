<script>
    import Navbar from '../Navbar.svelte';
    import { Card, Avatar, Button, Tabs, TabItem } from 'flowbite-svelte';

    import members from '$lib/assets/member/members.json'
    import graduatemembers from '$lib/assets/member/graduatemembers.json'
    import starmembers from '$lib/assets/member/starmembers.json'
</script>

<Navbar/>


<div class="tab-container">
<Tabs tabStyle="underline">
    <TabItem open>
        {#snippet titleSlot()}
            <span class="text-xl">현역 용사</span>
        {/snippet}
        <div class="text-center">
            <h1 class="text-3xl font-bold mb-4">현역 용사</h1>
            <p class="text-lg text-gray-600">에오르제아를 최근까지 지키고 있는 용사들입니다. 다 같이 재밌게 지내요!</p>
        </div>
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
            <span class="text-xl">졸업 용사</span>
        {/snippet}
        <!-- iter members -->
        <div class="text-center">
            <h1 class="text-3xl font-bold mb-4">졸업 용사</h1>
            <p class="text-lg text-gray-600">우리와 함께 했지만 다른 이들을 지키러 간 용사들입니다. 가끔씩 보면 반갑게 인사해주세요!</p>
            <p class="text-lg text-gray-600">(용사 한마디는 제 의견입니다!)</p>
        </div>
        <div class="card-container pt-8">
            {#each graduatemembers as member}
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
        <div class="text-center">
            <h1 class="text-3xl font-bold mb-4">별바다 용사</h1>
            <p class="text-lg text-gray-600">한 때 에오르제아를 지켜주었던 용사들입니다. 언젠간 다시 돌아오길!</p>
        </div>
        <div class="card-container pt-8">
            {#each starmembers as member}
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
</Tabs>
</div>


<style>
    .tab-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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