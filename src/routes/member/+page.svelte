<script>
    import Navbar from '../Navbar.svelte';

    import { Card, Avatar, Button } from 'flowbite-svelte';
</script>

<Navbar/>

<div class="card-container">
    <Card class='card' padding="md">
    <div class="flex flex-col items-center pb-4">
        <img class="p-8 rounded-t-lg" src="/images/profile/ponytail.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">포니테일검사여자</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">용사가 되고 싶은 자는 나에게...</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
    </Card>

    <Card class='card' padding="md">
    <div class="flex flex-col items-center pb-4">
        <img class="p-8 rounded-t-lg" src="/images/profile/songdowon.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">박사송도원</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">용사가 되고 싶은 자는 나에게...</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
    </Card>
</div>

<style>
    .card-container {
        display: flex;
        justify-content: center;
        gap: 16px;
    }

    .card {
        flex: 1 0 auto; /* 카드가 컨테이너의 가용 공간을 채우도록 설정 */
        min-width: 200px; /* 카드의 최소 너비 설정 */
        max-width: 300px; /* 카드의 최대 너비 설정 */
        box-sizing: border-box; /* padding과 border가 포함된 너비 계산 */
    }
</style>