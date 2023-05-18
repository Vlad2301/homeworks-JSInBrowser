(() => {
    const interests = document.querySelectorAll('.interest__check');
    interests.forEach((interest) => {
        interest.addEventListener('click', onCheckbox);
    })
})()

function onCheckbox() {
    const interestMain = this.closest('.interest');
    const interests = interestMain.querySelectorAll('.interest__check');
    if (!this.checked) {
        interests.forEach((interest) => {
            interest.checked = false;
        });
    } else {
        interests.forEach((interest) => {
            interest.checked = true;
        });
    }

}