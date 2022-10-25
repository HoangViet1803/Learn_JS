// thêm, xóa, sửa node trong js
// 1. Tạo ra element trong js: document.createElement("tag")
const div = document.createElement("div");

// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
const body = document.querySelector("body");
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Hoàng Việt";
div.innerHTML = `<div class="content"><h3>Dragon</h3></div>`