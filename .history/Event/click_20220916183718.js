// addEventListener
const button = document.querySelector(".button");

function handleClick() {
    console.log("Clicked button");
}
// lỗi sai khi dùng function và eventListener
// button.addEventListener("click",handleClick()) -> sai 
button.addEventListener("click", handleClick) // -> đúng
const span = document.querySelector(".button span");
span.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("clicked span");
})

// bubbling
// sự kiện click chạy từ trong ra ngoài