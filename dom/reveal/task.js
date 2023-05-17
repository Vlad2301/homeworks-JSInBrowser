(() => {
    document.addEventListener('scroll', revealBlock);
})()


function revealBlock(e) {
    const revealBlocks = document.querySelectorAll('.reveal');
    revealBlocks.forEach((revealBlock) => {
        revealBlock.classList.remove('reveal_active');
    });
    revealBlocks.forEach((revealBlock) => {
        const rect = revealBlock.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            revealBlock.classList.add('reveal_active');
        } else {
            revealBlock.classList.remove('reveal_active');
        }
    });
};