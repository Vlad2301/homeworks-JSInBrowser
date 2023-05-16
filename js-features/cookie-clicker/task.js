function cookieClick() {
    const cookieImg = document.querySelector('.clicker__cookie');
    const clickerCounter = document.getElementById('clicker__counter');
    let counter = Number(clickerCounter.textContent);
    clickerCounter.textContent = ++counter;
    if (counter % 2 === 0) {
        cookieImg.height += 20;
        cookieImg.width += 20;
    } else {
        cookieImg.height -= 20;
        cookieImg.width -= 20;
    }

}

const cookieImg = document.querySelector('.clicker__cookie');
cookieImg.addEventListener('click', cookieClick);
