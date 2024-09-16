<script>
    import Navbar from '../Navbar.svelte';

    import { Card, Avatar, Button } from 'flowbite-svelte';
</script>

<Navbar/>

<div class="card-container">
    <Card class='card' padding="md">
    <div class="flex flex-col items-center">
        <img class="p-2 pb-8 rounded-t-lg" src="/images/profile/ponytail.webp" alt="product 1" />
        <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">포니테일검사여자</h3>
        <span class="text-sm text-gray-500 dark:text-gray-400">용사가 되고 싶은 자는 나에게...</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
    </Card>

<Card class='card' padding="md">
    <div class="flex flex-col items-center">
        <img class="p-2 pb-8 rounded-t-lg" src="/images/profile/dowon.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">박사송도원</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">에오르제아의 새로운 새벽. 박사송도원</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
</Card>

<Card class='card' padding="md">
    <div class="flex flex-col items-center">
        <img class="p-2 pb-8 rounded-t-lg" src="/images/profile/janharu.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">잔하루</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">이름이 멋스러운 잔하루.</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
</Card>

<Card class='card' padding="md">
    <div class="flex flex-col items-center">
        <img class="p-2 pb-8 rounded-t-lg" src="/images/profile/haerin.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">강해린냥냥펀치</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">훌쩍 커버렸어 함께 한 기억처럼</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
        <!-- <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button> -->
        </div>
    </div>
</Card>

<Card class='card' padding="md">
    <div class="flex flex-col items-center">
        <img class="p-2 pb-8 rounded-t-lg" src="/images/profile/jjipark.webp" alt="product 1" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">팍모찌</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">제국이여 영원하라!</span>
        <div class="flex mt-4 space-x-3 rtl:space-x-reverse">
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
        max-width: 300px; /* 카드의 최대 너비를 설정 */
        width: 100%; /* 카드의 너비를 100%로 설정 */
    }
</style>