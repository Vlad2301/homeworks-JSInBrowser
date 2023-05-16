(() => {
    const modalMain = document.getElementById('modal_main');
    const modalSuccess = document.getElementById('modal_success');
    const modalMainClose = modalMain.querySelector('.modal__close');
    const modalSuccessClose = modalSuccess.querySelector('.modal__close');
    const btnShowSuccess = modalMain.querySelector('.show-success');

    modalMain.classList.add('modal_active');
    modalMainClose.addEventListener('click', closeModal);
    btnShowSuccess.addEventListener('click', () => openModal('modal_success'));
    modalSuccessClose.addEventListener('click', closeModal);
})()

function openModal(id) {
    const modals = Array.from(document.getElementsByClassName('modal'));
    modals.forEach((modal) => {
        modal.classList.remove('modal_active');
    });
    const modal = document.getElementById(id);
    modal.classList.add('modal_active');
}

function closeModal() {
    const modal = this.closest('.modal');
    modal.classList.remove('modal_active');
}