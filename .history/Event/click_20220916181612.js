// addEventListener
const button = document.querySelector(".button");

function handleClick() {
    console.log("Clicked");
}
// lỗi sai khi dùng function và eventListener
// button.addEventListener("click",handleClick()) -> sai 
button.addEventListener("click", handleClick) // -> đúng