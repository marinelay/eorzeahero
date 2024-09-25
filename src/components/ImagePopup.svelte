<script>
    import Modal from './Modal.svelte';
  
    let showModal = false;
    let selectedImage = '';
  
    export let images = [];
    export let listOfImages = [];
    export let listIndex = 0;
    export let columnImages = 0;
    export let currentIndex = 0;

    let allImages = listOfImages.flat();

    // 이미지 클릭 시 모달을 여는 함수
    function openModal(index) {
      // selectedImage = image;

      currentIndex = index + listIndex * columnImages;
      showModal = true;
      window.addEventListener('keydown', handleKeyDown);
    }
  
    // 모달을 닫는 함수
    function closeModal(event) {
      if (event.target.classList.contains('modal')) {
        close();
        // selectedImage = '';
      }
    }

    // X 버튼으로 모달 닫기
    function close() {
        showModal = false;
        window.removeEventListener('keydown', handleKeyDown);
    }

    // 다음 이미지로 넘기기
    function next() {
        currentIndex = (currentIndex + 1) % allImages.length;
    }

    // 이전 이미지로 넘기기
    function prev() {
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    }

    // 키보드 이벤트 처리 함수
    function handleKeyDown(event) {
        if (event.key === 'ArrowRight') {
            next();
        } else if (event.key === 'ArrowLeft') {
            prev();
        } else if (event.key === 'Escape') {
            close();  // Escape 키를 누르면 모달을 닫음
        }
    }

  </script>
  
<style>
  .gallery {
    display: flex;
    gap: 16px;
    flex-wrap: wrap; /* 필요한 경우 여러 줄로 표시 */
  }

  .gallery img {
      /* width: 720px; 원하는 너비 설정 */
      height: auto; /* 원본 비율 유지 */
      object-fit: cover; /* 이미지가 정사각형으로 잘리지 않도록 조정 */
      cursor: pointer;
      border-radius: 8px; /* 모서리 둥글게 */
      transition: transform 0.3s ease; /* 부드러운 확대 효과 */
  }

  .gallery img:hover {
      transform: scale(1.05); /* 이미지 확대 비율 */
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    pointer-events: auto; /* 버튼이 클릭될 수 있도록 설정 */
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
    user-select: none;
    pointer-events: auto; /* 버튼이 클릭될 수 있도록 설정 */
}

.modal-prev {
    left: 20px;
}

.modal-next {
    right: 20px;
}
</style>
  
<div class="gallery">
{#each images as image, index}
    <img src={image.src} alt="Thumbnail" on:click={() => openModal(index)} />
{/each}
</div>

<!-- 모달 팝업 -->
{#if showModal}
    <div class="modal" on:click={closeModal}>
        <span class="modal-close" on:click={close}>&times;</span>
        <button class="modal-prev" on:click={prev}>&larr;</button>
        <img src={allImages[currentIndex].src} alt="Displayed image" />
        <button class="modal-next" on:click={next}>&rarr;</button>
    </div>
{/if}

<!-- <Modal isOpen={showModal} src={selectedImage} onClose={closeModal} /> -->
