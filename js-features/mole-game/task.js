function init() {
    const holes = Array.from(document.querySelectorAll('.hole'));
    holes.forEach((hole) => {
        hole.addEventListener('click', onClick);
    });
}

function onClick() {
    if (this.classList.contains('hole_has-mole')) {
        const deadCounter = document.getElementById('dead');
        addToScore('dead');
        checkWinner.bind(deadCounter)();
    } else {
        const lostCounter = document.getElementById('lost');
        addToScore('lost');
        checkLoser.bind(lostCounter)();
    }
}

function addToScore(className) {
    const counter = document.getElementById(className);
    let count = Number(counter.textContent);
    counter.textContent = ++count;
}

function checkWinner() {
    if (Number(this.textContent) >= 10) {
        const lostCounter = document.getElementById('lost');
        this.textContent = 0;
        lostCounter.textContent = 0;
        alert('Вы победили');
    }
}
function checkLoser() {
    if (Number(this.textContent) >= 5) {
        const deadCounter = document.getElementById('dead');
        this.textContent = 0;
        deadCounter.textContent = 0;
        alert('Вы проиграли');
    }
}
init();