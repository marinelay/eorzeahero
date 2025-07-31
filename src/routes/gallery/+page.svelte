<script>
    import { Heading } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { Gallery } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import { Pagination, PaginationItem } from 'flowbite-svelte';
    import { goto } from '$app/navigation';

    import Navbar from '../Navbar.svelte';

    import images from '$lib/assets/gallery/images.json'

    import ImagePopup from '../../components/ImagePopup.svelte';

    let maxPagination = 5;
    let curPage = 1;
    let itemsPerPage = 12;
    let totalPages = 0;
    let columnImages = 3;

    let paginatedData = [];
    let pages = [];
    let completePages = [];
    let listOfImages = [];

    onMount(() => {
        totalPages = Math.ceil(images.length / itemsPerPage);
        completePages = Array.from({ length: totalPages }, (_, i) => {
            return {
                name: i + 1,
                href: `?page=${i + 1}`,
                active: false
            };
        });
    });

    $: activeUrl = $page.url.searchParams.get('page');

    

    $: {
        if (activeUrl === null) {
            curPage = 1;
        } else {
            curPage = parseInt(activeUrl);
        }

        let startPage = Math.ceil(curPage / maxPagination) * maxPagination - maxPagination + 1;
        let endPage = Math.min(startPage + maxPagination - 1, totalPages);

        pages = completePages.slice(startPage - 1, endPage);
        pages.forEach((page) => {
            let hrefValue = page.href.split('=')[1];

            if (hrefValue === activeUrl) {
                page.active = true;
            } else {
                page.active = false;
            }

            if (page.name === 1 && activeUrl === null) {
                pages[0].active = true;
            }
        });

        const start = (curPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        paginatedData = images.slice(start, end);

        listOfImages = [];

        if (paginatedData.length > 0 ) {
            let images1 = Array.from({ length: Math.min(paginatedData.length, columnImages) }, (_, i) => {
                return paginatedData[i];
            });
            
            listOfImages.push(images1);
        }

        

        if (paginatedData.length > columnImages) {
            let images2 = Array.from({ length: Math.min(paginatedData.length - columnImages, columnImages) }, (_, i) => {
                return paginatedData[i + columnImages];
            });

            listOfImages.push(images2);
        }

        if (paginatedData.length > columnImages * 2) {
            let images3 = Array.from({ length: Math.min(paginatedData.length - columnImages * 2, columnImages) }, (_, i) => {
                return paginatedData[i + columnImages * 2];
            });

            listOfImages.push(images3);
        }

        if (paginatedData.length > columnImages * 3) {
            let images4 = Array.from({ length: Math.min(paginatedData.length - columnImages * 3, columnImages) }, (_, i) => {
                return paginatedData[i + columnImages * 3];
            });

            listOfImages.push(images4);
        }
    }

    const previous = () => {
        let pagination = Math.floor(curPage / maxPagination);
        curPage = pagination * maxPagination;
        if (curPage < 1) {
            curPage = 1;
        }
        goto(`?page=${curPage}`);
    };
    const next = () => {
        let pagination = Math.ceil(curPage / maxPagination);
        curPage = (pagination) * maxPagination + 1;
        if (curPage > totalPages) {
            curPage = totalPages;
        }
        goto(`?page=${curPage}`);
    };
</script>

<Navbar/>

<div class = "main-conatainer">

<div class="text-center mt-8">
    <Heading tag="h1" class="mb-4">용사들 모음집</Heading>
</div>

<div class="container">
    <div class="mt-4">
        <Pagination {pages} large on:previous={previous} on:next={next}/>
    </div>
</div>

<Gallery class="mt-8 ml-8 mr-8 mb-12 gap-4 grid-cols-2 md:grid-cols-4">
    {#each listOfImages as images, listIndex}
        
    <ImagePopup {images} {listIndex} {columnImages} {listOfImages}/>
     <!-- <Gallery items={images} /> -->
    {/each}
</Gallery>

</div>

<style>
    .main-conatainer {
        width: 85%;
        align-items: center;
        margin:auto;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
    }
</style>
