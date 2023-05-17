(() => {
    window.addEventListener('load', switchTextAd);
})()

function switchTextAd() {
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach((rotator) => {
        const rotatorCases = rotator.children;
        switchTextAdCase(rotatorCases, 0);
    });
}


function switchTextAdCase(rotatorCases, i) {
    if (rotatorCases[i].classList.contains('rotator__case_active')) {
        rotatorCases[i].classList.remove('rotator__case_active');
        if (i === rotatorCases.length - 1) {
            rotatorCases[0].classList.add('rotator__case_active');
        } else {
            rotatorCases[i + 1].classList.add('rotator__case_active');
        }
    }
    i++;
    if (i === rotatorCases.length) {
        i = 0;
    }

    setTimeout(() => {
        switchTextAdCase(rotatorCases, i);
    }, 1000)
}