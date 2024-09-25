<!-- src/components/Modal.svelte -->
<script>
    export let isOpen = false;
    export let src = '';
    export let onClose = () => {};
  
    // 모달을 닫는 함수
    function close(event) {
        // 모달의 배경을 클릭했을 때만 닫기
        if (event.target.classList.contains('modal')) {
            onClose();
        }
    }
  
  </script>
  
<div class="modal" style:display={isOpen ? 'flex' : 'none'} on:click={close}>
<span class="modal-close" on:click={onClose}>&times;</span>
<img src={src} alt="Original image" />
</div>

<style>
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
    color: white;
    font-size: 30px;
    cursor: pointer;
}
</style>

