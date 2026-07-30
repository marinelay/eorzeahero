<script lang="ts">
    import { onMount } from 'svelte';
    import { Card, Popover } from 'flowbite-svelte';

    type Member = {
        name: string;
        desc: string;
        image: string;
        imageOffsetX?: number;
        imageOffsetY?: number;
        imageCrop?: number;
    };

    export let members: Member[] = [];
    export let ranked = false;
    let triggerType: 'hover' | 'click' = 'hover';

    function getImageCrop(member: Member) {
        return Math.max(
            member.imageCrop ?? 0,
            Math.abs(member.imageOffsetX ?? 0),
            Math.abs(member.imageOffsetY ?? 0)
        );
    }

    onMount(() => {
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

        if (isTouchDevice) {
            triggerType = 'click';
        }
    });
</script>

<div class="card-container pt-8">
    {#each members as member, index}
        {@const imageCrop = getImageCrop(member)}
        <div class:ranked={ranked && index < 5} class={`member-card rank-${index + 1}`}>
            <Card class="member-card-surface w-full h-52 p-3 sm:p-3">
                <div class="flex flex-col items-center">
                    <div class:ranked={ranked && index < 5} class={`profile-frame rank-${index + 1}`}>
                        <div class="profile-image overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-700">
                            <img
                                src={member.image}
                                alt={member.name}
                                style:width={`calc(100% + ${imageCrop * 2}px)`}
                                style:height={`calc(100% + ${imageCrop * 2}px)`}
                                style:transform={`translate(calc(-50% + ${member.imageOffsetX ?? 0}px), calc(-50% + ${member.imageOffsetY ?? 0}px))`}
                            />
                        </div>
                    </div>
                    <h5 class="member-name mb-1 font-medium text-gray-900 dark:text-white">{member.name}</h5>
                </div>
            </Card>
        </div>
        <Popover trigger={triggerType} class="p-2">
            <span class="text-base text-gray-500 dark:text-gray-400 text-center">{member.desc}</span>
        </Popover>
    {/each}
</div>

<style>
    .card-container {
        width: min(100%, 1160px);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin:auto;
        gap: 16px;
        flex-wrap: wrap; /* 필요한 경우 여러 줄로 표시 */
    }


    .profile-frame {
        position: relative;
        width: 8rem;
        height: 8rem;
        margin-bottom: .8rem;
        border-radius: 9999px;
        isolation: isolate;
    }

    .member-card {
        position: relative;
        width: 11rem;
        flex: 0 0 11rem;
        border-radius: .5rem;
    }

    .member-name {
        max-width: 100%;
        overflow: hidden;
        font-size: .95rem;
        line-height: 1.35;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .member-card :global(.member-card-surface) {
        border-color: transparent;
        box-shadow: 0 0 0 1px #ebebeb;
    }

    .member-card.ranked::before {
        content: '';
        position: absolute;
        z-index: 2;
        inset: 0;
        padding: 2px;
        border-radius: .5rem;
        background: var(--rank-gradient);
        opacity: .48;
        mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
        mask-composite: exclude;
        pointer-events: none;
    }

    .profile-image {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: #101426;
    }

    .profile-frame.ranked::before {
        content: '';
        position: absolute;
        z-index: 0;
        inset: var(--rank-frame-inset);
        border-radius: 9999px;
        background: var(--rank-gradient);
        box-shadow: var(--rank-frame-shadow);
    }

    .profile-frame.ranked::after {
        content: var(--rank-gem);
        position: absolute;
        z-index: 2;
        left: 50%;
        bottom: -12px;
        width: var(--rank-gem-width);
        height: var(--rank-gem-height);
        transform: translateX(-50%);
        color: var(--rank-light);
        border: 2px solid var(--rank-dark);
        border-radius: 4px 4px 11px 11px;
        background: var(--rank-mid);
        box-shadow: 0 3px 7px rgba(15, 23, 42, .3);
        font-size: var(--rank-gem-size);
        line-height: calc(var(--rank-gem-height) - 4px);
        text-align: center;
        text-shadow: 0 1px 2px var(--rank-dark);
    }

    .rank-1 {
        --rank-dark: #651b24;
        --rank-mid: #b42336;
        --rank-light: #ffd2d7;
        --rank-glow: rgba(239, 68, 68, .42);
        --rank-gradient: conic-gradient(from 25deg, #651b24, #ff8b92, #9f1239, #ffd0d3, #651b24);
        --rank-frame-inset: -8px;
        --rank-frame-shadow:
            0 0 0 3px color-mix(in srgb, var(--rank-dark) 42%, transparent),
            0 0 0 5px color-mix(in srgb, var(--rank-light) 18%, transparent),
            0 0 22px var(--rank-glow),
            inset 0 0 8px rgba(255, 255, 255, .9);
        --rank-gem: '★';
        --rank-gem-width: 35px;
        --rank-gem-height: 27px;
        --rank-gem-size: 15px;
    }

    .rank-2 {
        --rank-dark: #123d73;
        --rank-mid: #1766aa;
        --rank-light: #d8efff;
        --rank-glow: rgba(59, 130, 246, .42);
        --rank-gradient: conic-gradient(from 25deg, #123d73, #8bd5ff, #1d4ed8, #d7f2ff, #123d73);
        --rank-frame-inset: -7px;
        --rank-frame-shadow:
            0 0 0 2px color-mix(in srgb, var(--rank-dark) 40%, transparent),
            0 0 0 4px color-mix(in srgb, var(--rank-light) 13%, transparent),
            0 0 18px var(--rank-glow),
            inset 0 0 7px rgba(255, 255, 255, .82);
        --rank-gem: '✦';
        --rank-gem-width: 32px;
        --rank-gem-height: 25px;
        --rank-gem-size: 14px;
    }

    .rank-3 {
        --rank-dark: #725016;
        --rank-mid: #b98216;
        --rank-light: #fff0ad;
        --rank-glow: rgba(245, 158, 11, .44);
        --rank-gradient: conic-gradient(from 25deg, #725016, #fff0a6, #c68a17, #fff8c9, #725016);
        --rank-frame-inset: -6px;
        --rank-frame-shadow:
            0 0 0 2px color-mix(in srgb, var(--rank-dark) 38%, transparent),
            0 0 14px var(--rank-glow),
            inset 0 0 6px rgba(255, 255, 255, .74);
        --rank-gem: '◆';
        --rank-gem-width: 29px;
        --rank-gem-height: 23px;
        --rank-gem-size: 12px;
    }

    .rank-4 {
        --rank-dark: #596475;
        --rank-mid: #8995a6;
        --rank-light: #ffffff;
        --rank-glow: rgba(148, 163, 184, .4);
        --rank-gradient: conic-gradient(from 25deg, #596475, #f8fafc, #94a3b8, #ffffff, #596475);
        --rank-frame-inset: -5px;
        --rank-frame-shadow:
            0 0 0 1px color-mix(in srgb, var(--rank-dark) 35%, transparent),
            0 0 9px -2px var(--rank-glow),
            inset 0 0 5px rgba(255, 255, 255, .62);
        --rank-gem: '◆';
        --rank-gem-width: 28px;
        --rank-gem-height: 22px;
        --rank-gem-size: 12px;
    }

    .rank-5 {
        --rank-dark: #6f3c21;
        --rank-mid: #a96032;
        --rank-light: #ffd7b4;
        --rank-glow: rgba(180, 83, 9, .4);
        --rank-gradient: conic-gradient(from 25deg, #6f3c21, #e9a56e, #9a4f2c, #ffd0a3, #6f3c21);
        --rank-frame-inset: -4px;
        --rank-frame-shadow:
            0 0 0 1px color-mix(in srgb, var(--rank-dark) 30%, transparent),
            inset 0 0 4px rgba(255, 255, 255, .5);
        --rank-gem: '◆';
        --rank-gem-width: 27px;
        --rank-gem-height: 22px;
        --rank-gem-size: 12px;
    }

    .profile-image img {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: none;
        object-fit: cover;
        object-position: 50% 25%;
    }

    @media (max-width: 600px) {
        .card-container {
            justify-content: center;
            gap: 12px;
        }

        .member-card {
            width: calc(50% - 6px);
            flex-basis: calc(50% - 6px);
        }

        .profile-frame {
            width: 7rem;
            height: 7rem;
        }
    }
</style>
