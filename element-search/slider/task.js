(() => {
    const arrows = document.querySelectorAll('.slider__arrow');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', toSlideImage);
    });
})()


function toSlideImage() {
    const slides = document.querySelectorAll('.slider__item');
    if (this.classList.contains('slider__arrow_next')) {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slider__item_active')) {
                slides[i].classList.remove('slider__item_active');
                if (i === slides.length - 1) {
                    slides[0].classList.add('slider__item_active');
                    break;
                } else {
                    slides[i + 1].classList.add('slider__item_active');
                    break;
                }
            }
        }
    } else {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slider__item_active')) {
                slides[i].classList.remove('slider__item_active');
                if (i === 0) {
                    slides[slides.length - 1].classList.add('slider__item_active');
                    break;
                } else {
                    slides[i - 1].classList.add('slider__item_active');
                    break;
                }
            }
        }
    }
}