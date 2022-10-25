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
div.innerHTML = `<div class="content"><h3>Dragon</h3></div>`;

// Bài tập tạo ra HTML như đã minh họa ở file HTML
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
const img = document.createElement("img");
img.classList.add("card-image");
img.setAttribute("src", "https://source.unsplash.com/random");
img.setAttribute("alt", "random-image");
card.appendChild(img);

// 3. document.createTextNode
const text = document.createTextNode("Hello, My name is Viet");
body.appendChild(text);

// 4. elemnt.cloneNode(boolean)
// true: copy thẻ và toàn bộ nội dung
// flase: chỉ copy thẻ
const imgClone = img.cloneNode(true);
body.appendChild(imgClone);

// 5. elemnt.hasChildNodes() - kiểm tra element có phần tử con hay không, trả về giá trị boolean
console.log(card.hasChildNodes());

// 6. node.replaceChild(newnode, oldnode);
const strongText = document.querySelector("strong")
const span = document.createElement("span");
span.textContent = "Saint Petersburg";
document.body.replaceChild(span, strongText);

// 7. convert HTMLCollection, NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);
// cách 1: Array.from(HTMLCollection or NodeList)
// cách 2: [...HTMLCollection], [...NodeList]