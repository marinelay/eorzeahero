<script lang="ts">
    let showModal = false;
    let currentIndex = 0;
  
    export let images: { src: string }[] = [];
  
    function openModal(index: number) {
      currentIndex = index;
      showModal = true;
      window.addEventListener('keydown', handleKeyDown);
    }
  
    function closeModal(event: MouseEvent) {
      if ((event.target as HTMLElement).classList.contains('modal')) {
        close();
      }
    }
  
    function close() {
      showModal = false;
      window.removeEventListener('keydown', handleKeyDown);
    }
  
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function prev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') next();
      else if (event.key === 'ArrowLeft') prev();
      else if (event.key === 'Escape') close();
    }
  </script>
  
  <style>
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  
    .image-wrapper {
    width: 720px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    }

    .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    }

    .image-wrapper:hover img {
    transform: scale(1.05);
    }
  
    .modal {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal img {
      max-width: 90%;
      max-height: 90%;
    }
  
    .modal-close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 10px;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }
  
    .modal-prev, .modal-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: white;
      font-size: 48px;
      cursor: pointer;
    }
  
    .modal-prev {
      left: 20px;
    }
  
    .modal-next {
      right: 20px;
    }
  </style>
  
  <!-- 이미지 썸네일들 -->
  <div class="gallery">
    {#each images as image, index}
        <div class="image-wrapper" on:click={() => openModal(index)}>
      <img src={image.src} alt="Thumbnail"/>
        </div>
    {/each}
  </div>
  
  <!-- 모달 -->
  {#if showModal}
    <div class="modal" on:click={closeModal}>
      <span class="modal-close" on:click={close}>&times;</span>
      <button class="modal-prev" on:click={prev}>&larr;</button>
      <img src={images[currentIndex].src} alt="Modal Image" />
      <button class="modal-next" on:click={next}>&rarr;</button>
    </div>
  {/if}
  