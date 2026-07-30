<script>
    import Navbar from '../Navbar.svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';

    import members from '$lib/assets/member/members.json'
    import graduatemembers from '$lib/assets/member/graduatemembers.json'
    import starmembers from '$lib/assets/member/starmembers.json'

    import Member from '$lib/components/Member.svelte';

    const members2023 = members.slice(0, 2);
    const members2024 = members.slice(2, 6);
    const members2025 = members.slice(6, 11);
    const members2026 = members.slice(11);
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
        <div class="year-sections">
            <section class="year-section" aria-labelledby="members-2023">
                <h2 id="members-2023">2023</h2>
                <Member members={members2023} ranked/>
            </section>
            <section class="year-section" aria-labelledby="members-2024">
                <h2 id="members-2024">2024</h2>
                <Member members={members2024} ranked rankOffset={2}/>
            </section>
            <section class="year-section" aria-labelledby="members-2025">
                <h2 id="members-2025">2025</h2>
                <Member members={members2025}/>
            </section>
            <section class="year-section" aria-labelledby="members-2026">
                <h2 id="members-2026">2026</h2>
                <Member members={members2026}/>
            </section>
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
        <Member members={graduatemembers}/>
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
        <Member members={starmembers}/>
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

    .tab-container :global([role="tabpanel"]) {
        width: 100%;
    }

    .year-sections {
        width: min(1200px, 100%);
        margin: .75rem auto 0;
    }

    .year-section {
        padding: 1rem 0 1.5rem;
    }

    .year-section:first-child {
        padding-top: .25rem;
    }

    .year-section h2 {
        width: min(100%, 1160px);
        margin: 0 auto;
        color: #475569;
        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: .04em;
    }

    .year-section :global(.card-container) {
        padding-top: .9rem;
    }
</style>
