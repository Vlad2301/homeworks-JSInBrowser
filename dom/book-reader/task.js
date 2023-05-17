(() => {
    const bookFontSizes = document.querySelectorAll('.book__control > .font-size');
    bookFontSizes.forEach((bookFontSize) => {
        bookFontSize.addEventListener('click', changeFontSize);
    });

})()

function changeFontSize(e) {
    e.preventDefault();
    const bookFontSizes = document.querySelectorAll('.book__control > .font-size');
    const book = this.closest('.book');
    bookFontSizes.forEach((bookFontSize) => {
        bookFontSize.classList.remove('font-size_active');
    });
    this.classList.add('font-size_active');
    if (book.classList[1]) {
        book.classList.remove(book.classList[1]);
    }
    book.classList.add(this.classList[1]);
}