(() => {
    const dropdownValues = document.querySelectorAll('.dropdown__value');
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    dropdownValues.forEach((dropdownValue) => {
        dropdownValue.addEventListener('click', expandDropdown);
    });
    dropdownItems.forEach((dropdownItem) => {
        dropdownItem.addEventListener('click', setDropdownValue);

    });

})()


function expandDropdown() {
    const dropdownList = this.nextElementSibling;
    dropdownList.classList.add('dropdown__list_active');
}


function setDropdownValue(e) {
    e.preventDefault();
    const dropdownValue = this.closest('.dropdown__list').previousElementSibling;
    dropdownValue.textContent = this.firstElementChild.textContent;
    const dropdownList = this.closest('.dropdown__list');
    dropdownList.classList.remove('dropdown__list_active');

}