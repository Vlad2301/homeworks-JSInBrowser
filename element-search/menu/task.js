(() => {
    const menuLinks = document.querySelectorAll('ul.menu_main > .menu__item > .menu__link');
    const menuSubs = document.querySelectorAll('ul.menu_main > .menu__item > .menu_sub');

    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', onClickMenu);
    })
    menuSubs.forEach((menuSub) => {
        menuSub.previousElementSibling.addEventListener('click', expandMenu);
    })
})();

function onClickMenu() {
    const menuSubs = document.querySelectorAll('ul.menu_main > .menu__item > .menu_sub');
    menuSubs.forEach((menuSub) => {
        menuSub.classList.remove('menu_active');
    });
}

function expandMenu(e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('menu_active');
}