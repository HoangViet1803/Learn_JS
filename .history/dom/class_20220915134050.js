// 4 phương thức về class
// 1. selector.classList.add("className")
const container = document.querySelector(".container");
container.classList.add("is-active");

// 2. selector.classList.remove("className");
container.classList.remove("container");

// 3. selector.classList.contains("className") -> kiểm tra selector có chứa class nào đó hay không, trả về giá trị boolean
console.log(container.classList.contains("container"));
console.log(container.classList.contains("is-active"));