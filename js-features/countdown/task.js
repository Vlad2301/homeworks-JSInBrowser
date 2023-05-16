function countdown(timer) {
    let currentValueTimer = Number(timer.innerText);
    if (currentValueTimer > 0) {
        currentValueTimer -= 1;
        timer.innerText = currentValueTimer;
        setTimeout(countdown, 1000, timer);
    }else{
        alert("Вы победили");
    }
}

const timer = document.getElementById("timer");
window.addEventListener("load", () => countdown(timer));