const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list")
dropdownSelect.addEventListener('click', function(event) {

    if (dropdownList) {
        dropdownList.classList.toggle("show")
    }
});
[...dropdownItems].forEach(item => item.addEventListener('click', handleClickDropdownItem));

function handleClickDropdownItem(event) {
    const text = event.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.toggle("show");
};