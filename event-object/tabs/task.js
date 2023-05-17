(() => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => toggleTab(index));
    });
})()


function toggleTab(indexTabContent) {
    const tabContents = document.querySelectorAll('.tab__content');
    tabContents.forEach((tabContent)=>{
        tabContent.classList.remove('tab__content_active');
    });
    tabContents[indexTabContent]?.classList.add('tab__content_active');
}