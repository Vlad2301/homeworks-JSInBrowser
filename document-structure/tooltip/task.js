(() => {
    const textsWithTooltip = document.querySelectorAll('.has-tooltip');
    textsWithTooltip.forEach(el => {
        el.addEventListener('click', onClick);
    });
})()


function onClick(e) {

    e.preventDefault();

    const tooltip = document.querySelector('.tooltip');
    this.insertAdjacentElement('beforeEnd', tooltip);
    if (!this.firstElementChild.classList.contains('tooltip_active')) {
        const { title, offsetLeft, offsetTop, offsetHeight } = this;
        this.firstElementChild.textContent = title;
        this.firstElementChild.style.left = offsetLeft + 'px';
        this.firstElementChild.style.top = offsetTop + offsetHeight + 'px';
        this.firstElementChild.classList.add('tooltip_active');
    } else {
        tooltip.classList.remove('tooltip_active');
    }
}