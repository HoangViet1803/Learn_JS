// addEventListener
const button = document.querySelector(".button");

function handleClick() {
    console.log("Clicked button");
}
// lỗi sai khi dùng function và eventListener
// button.addEventListener("click",handleClick()) -> sai 
button.addEventListener("click", handleClick, { capture: true }) // -> đúng
const span = document.querySelector(".button span");
span.addEventListener("click", function(e) {
    // e.stopPropagation(); -> chặn bubbling click
    e.stopImmediatePropagation() // chặn các sự kiện bên dưới của span
    console.log("clicked span");
    console.log(e);
})
span.addEventListener("click", function(e) {
    console.log("clicked span 2");
})

// bubbling
// sự kiện click chạy từ trong ra ngoài
// capture
// sự kiện click chạy từ ngoài vào trong

// target vs currentTarget
button.addEventListener('click', function(e) {
    // event.target: chọn chính xác element được click tới
    console.log(`e.target: ${e.target}`);
    // event.curentTarget: chọn phần tử được click tới
    console.log(`e.currentTarget: ${e.currentTarget}`);
})

// event.preventDefault()
const link = document.querySelector(".link");
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click me");
})

// object style
link.addEventListener('click', function(event) {
    // selector.style.proprty = value
    // event.target.style.property = value
    console.log(event.target);
    console.log(event.target.style);
})

// custom attribute
const vie = document.querySelector('.link-y');
vie.addEventListener('click', function(event) {
    // lấy custom attribute data-abc
    // .dataset.name
    event.preventDefault();
    const name = event.target.dataset.name;
    console.log(name);
})