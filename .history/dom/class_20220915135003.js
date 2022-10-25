// Các phương thức về class
// 1. selector.classList.add("className")
// chỉ thêm được 1 class 1 lần
const container = document.querySelector(".container");
container.classList.add("is-active");

// 2. selector.classList.remove("className");
// chỉ xóa được 1 class 1 lần
container.classList.remove("container");

// 3. selector.classList.contains("className") -> kiểm tra selector có chứa class nào đó hay không, trả về giá trị boolean
console.log(container.classList.contains("container"));
console.log(container.classList.contains("is-active"));

// 4. selector.classList.toggle("className") 
// chức năng tương tự như đoạn code dưới đây
if (container.classList.contains("is-active")) {
    container.classList.remove("is-active");
} else { container.classList.add("is-active"); }

// 5. selector.className -> trả ra chuỗi các class của selector
const h1 = document.querySelector(".first");
console.log(h1.className);