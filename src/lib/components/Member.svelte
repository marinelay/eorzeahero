<script>
    import { onMount } from 'svelte';
    import { Card, Popover } from 'flowbite-svelte';

    export let members = [];

    // 1. trigger 속성에 바인딩할 변수를 선언하고, 데스크탑 기본값인 'hover'로 설정합니다.
    let triggerType = 'hover';

    // 2. onMount는 브라우저에서만 실행되므로 안전합니다.
    onMount(() => {
    // 3. 사용자의 주요 입력 장치가 터치스크린인지 확인합니다.
    // (pointer: coarse)는 마우스처럼 정밀한 포인터가 아니라는 의미입니다.
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
        // 터치 기기일 경우, trigger 타입을 'click'으로 변경합니다.
        triggerType = 'click';
    }
    });
</script>

<div class="card-container pt-8">
    {#each members as member}
        <Card class="w-60 h-60 p-3 sm:p-3">
            <div class="flex flex-col items-center">
                <div class="w-40 h-40 mb-4 overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-700"> 
                    <img class="w-full h-full" src={member.image} alt="product 1" />
                </div>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
            </div>
        </Card>
        <Popover trigger={triggerType} class="p-2">
            <span class="text-base text-gray-500 dark:text-gray-400 text-center">{member.desc}</span>
        </Popover>
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
        /* max-height: 200px; */
        object-fit: cover;
        object-position: 50% 25%;
    }
</style>