<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import Navbar from '../Navbar.svelte';
    import images from '$lib/assets/gallery/images.json';
  
    const itemsPerLoad = 12;
    // SSR 오류를 방지하기 위해 브라우저 환경에서만 초기 이미지를 설정합니다.
    let displayedImages = browser ? images.slice(0, itemsPerLoad) : [];
    let allImagesLoaded = displayedImages.length >= images.length;
    
    /**
     * Svelte Action: 이미지 로드 후 그리드 아이템의 세로 길이를 동적으로 조절합니다.
     * 이 함수가 이 갤러리의 핵심 로직입니다.
     */
    function resizeGridItem(node: HTMLElement) {
      const img = node.querySelector('img');
      if (!img) return;
  
      const setSpan = () => {
      if (!img.naturalWidth) return;

      // --- 🧐 여기가 핵심 수정 부분입니다 ---

      // 1. 기준값 설정
      const defaultHeight = 150; // 표준(16:9) 이미지의 기본 높이
      const maxHeight = 250;     // 비표준 이미지의 최대 높이
      const standardRatio = 16 / 9;
      const imageRatio = img.naturalWidth / img.naturalHeight;
      
      let finalHeight;

      // 2. 이미지 비율 체크 (부동소수점 오차를 감안해 약간의 여유를 둠)
      if (Math.abs(imageRatio - standardRatio) < 0.01) {
        // 이미지가 표준 16:9 비율에 가까우면, 미리 정해둔 '기본 높이'를 사용
        finalHeight = defaultHeight;
      } else {
        // 그 외 다른 비율(세로 사진 등)을 가졌을 경우, 이전처럼 비율에 따라 높이를 계산
        const correctHeight = img.clientWidth * (img.naturalHeight / img.naturalWidth);
        // 단, 너무 길어지지 않도록 '최대 높이'는 넘지 않게 함
        finalHeight = Math.min(correctHeight, maxHeight);
      }

      const rowSpan = Math.ceil(finalHeight / 10) + 1;
      node.style.gridRowEnd = `span ${rowSpan}`;
    };
  
      if (img.complete) {
        setSpan(); // 이미지가 캐시된 경우
      } else {
        img.addEventListener('load', setSpan); // 이미지가 로딩될 때
      }
      
      return {
        destroy() {
          if(img) img.removeEventListener('load', setSpan);
        }
      };
    }
    
    // --- 무한 스크롤 로직 ---
    async function loadMore() {
      if (allImagesLoaded) return;
      const currentCount = displayedImages.length;
      const nextImages = images.slice(currentCount, currentCount + itemsPerLoad);
      displayedImages = [...displayedImages, ...nextImages];
      if (displayedImages.length >= images.length) {
        allImagesLoaded = true;
      }
    }
    
    onMount(() => {
      // 페이지가 로드될 때 초기 이미지 세트를 불러옵니다.
      if(displayedImages.length === 0) {
        loadMore();
      }
  
      // 페이지 하단의 로더를 감시할 Intersection Observer를 설정합니다.
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { rootMargin: '0px 0px 500px 0px' }
      );
  
      const loader = document.querySelector('.loader-container');
      if (loader) {
        observer.observe(loader);
      }
      
      return () => observer.disconnect();
    });
  
    // --- 모달 로직 ---
    let showModal = false;
    let currentIndex = 0;
  
    function openModal(clickedIndex: number) {
      currentIndex = clickedIndex;
      showModal = true;
    }
  
    function closeModal() { showModal = false; }
    function handleModalClick(event: MouseEvent) {
      if ((event.target as HTMLElement).classList.contains('modal')) closeModal();
    }
    function nextImage() { currentIndex = (currentIndex + 1) % displayedImages.length; }
    function prevImage() { currentIndex = (currentIndex - 1 + displayedImages.length) % displayedImages.length; }
    function handleKeyDown(event: KeyboardEvent) {
      if (!showModal) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    }
  </script>
  
  <svelte:window on:keydown={handleKeyDown}/>
  
  <Navbar />
  
  <div class="main-container">
    <div class="text-center mt-8">
      <h1 class="text-6xl font-bold mb-4">용사들 모음집</h1>
    </div>
  
    <div class="gallery px-8 py-10">
      {#each displayedImages as image, index}
        <div class="image-wrapper" use:resizeGridItem on:click={() => openModal(index)}>
          <img src={image.src} alt="갤러리 썸네일 {index + 1}" loading="lazy" />
        </div>
      {/each}
    </div>
    
    {#if !allImagesLoaded}
      <div class="loader-container">
        <p>다음 용사들을 기다리는 중...</p>
      </div>
    {/if}
  </div>
  
  {#if showModal}
    <div class="modal" on:click={handleModalClick} role="dialog" aria-modal="true">
      <span class="modal-close" on:click={closeModal}>&times;</span>
      <button class="modal-prev" on:click|stopPropagation={prevImage}>&larr;</button>
      <img src={displayedImages[currentIndex].src} alt="모달 이미지 {currentIndex + 1}" class="modal-content"/>
      <button class="modal-next" on:click|stopPropagation={nextImage}>&rarr;</button>
    </div>
  {/if}
  
  <style>
    .gallery {
      display: grid;
      /* 🧐 2. 이미지 사이의 간격과 열 개수를 여기서 조절할 수 있습니다. */
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      /* 모든 행의 기본 높이를 10px로 설정합니다. */
      grid-auto-rows: 10px;
    }
  
    @media (min-width: 768px) {
      .gallery {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  
    .image-wrapper {
      /* 아이템의 세로 길이는 JavaScript가 설정하므로, 여기서는 기본값만 둡니다. */
      grid-row-end: span 25; 
    }
  
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 컨테이너를 꽉 채우고, 넘치는 부분은 잘라냅니다. */
      border-radius: 8px;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }
  
    .image-wrapper:hover img { opacity: 0.85; }
    .loader-container { text-align: center; padding: 2rem; color: #888; }
    .main-container { width: 85%; margin: auto; }
    .modal { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); display: flex; justify-content: center; align-items: center; z-index: 1000; }
    .modal-content { max-width: 90vw; max-height: 90vh; object-fit: contain; }
    .modal-close { position: absolute; top: 15px; right: 35px; color: white; font-size: 40px; font-weight: bold; cursor: pointer; }
    .modal-prev, .modal-next { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: none; color: white; font-size: 48px; cursor: pointer; padding: 16px; user-select: none; }
    .modal-prev { left: 20px; }
    .modal-next { right: 20px; }
  </style>