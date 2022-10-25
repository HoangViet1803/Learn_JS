// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector(".span");
console.log(span.parentNode);
console.log(span.parentElement);

/* Sự khác nhau giữa parentNode và parentElement
* parentNode có thể null 
            document.documentElement -> lấy thẻ html
*/

// selector.parentNode.removeChild(selector) or selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove()

// 2. nextElementSibling: tìm tới phần tử kế tiếp vs previousElementSibling: tìm tới phần tử đứng trước nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

const demo = span.previousElementSibling;
console.log(demo);

// 3. childNode: trả về 1 mảng các node bên trong bao gồm textNode vs children: trả về 1 mảng các node không bao gồm textNodes
console.log(span.childNodes); // trả về NodeList [text,strong,text]
console.log(span.children); // trả về HTMLCollection [strong]

// 4. firstChild vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>henry</strong>

// 5. lastChild vs lastElementChild
console.log(span.lastChild); // text 
console.log(span.lastElementChild); // <strong class="name">viet</strong>

// 6. nextSibling vs previousSibling