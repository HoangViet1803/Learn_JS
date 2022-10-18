const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
console.log(menu);
toggle.addEventListener('click', handleClick);

function handleClick(event) {
    event.target.classList.toggle("fa-bars");
    event.target.classList.toggle("fa-times")
    menu.classList.toggle('is-show');
}
document.addEventListener('click', handleClickOutMenu);

function handleClickOutMenu(event) {
    console.log(event.target);
    // node.contains(node): kiểm tra element có chứa element khác không, trả về boolean
    // if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    //     menu.classList.remove('is-show');
    //     toggle.classList.add("fa-bars");
    //     toggle.classList.remove('fa-times');
    // }

    // element.matches( CSS selectors): return boolean
    if (!menu.contains(event.target) && !event.target.matches('.menu-toggle')) {
        menu.classList.remove('is-show');
        toggle.classList.add("fa-bars");
        toggle.classList.remove('fa-times');
    }
}