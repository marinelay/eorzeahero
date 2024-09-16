<script>
    import Modal from './Modal.svelte';
  
    let showModal = false;
    let selectedImage = '';
  
    export let images = [];
  
    // 이미지 클릭 시 모달을 여는 함수
    function openModal(image) {
      selectedImage = image;
      showModal = true;
    }
  
    // 모달을 닫는 함수
    function closeModal() {
      showModal = false;
      selectedImage = '';
      console.log('close OK');
    }
  </script>
  
  <style>
    .gallery {
      display: flex;
      gap: 16px;
      flex-wrap: wrap; /* 필요한 경우 여러 줄로 표시 */
    }
  
    .gallery img {
        width: 480px; /* 원하는 너비 설정 */
        height: auto; /* 원본 비율 유지 */
        object-fit: cover; /* 이미지가 정사각형으로 잘리지 않도록 조정 */
        cursor: pointer;
        border-radius: 8px; /* 모서리 둥글게 */
        transition: transform 0.3s ease; /* 부드러운 확대 효과 */
    }

    .gallery img:hover {
        transform: scale(1.1); /* 이미지 확대 비율 */
    }
  </style>
  
<div class="gallery">
{#each images as image}
    <img src={image.src} alt="Thumbnail" on:click={() => openModal(image.src)} />
{/each}
</div>

<Modal isOpen={showModal} src={selectedImage} onClose={closeModal} />