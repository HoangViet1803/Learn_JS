// 1. DOM là gì?
// Document Object Model
// DOM node, DOM attribute

/* Một số selector đặc biệt:
    - html: document.documentElement
    - body: document.body
    - head: document.head
    - title: document.title
*/

// 2. Selecting nodes
// 2.1 document.querySelector("selector") -> trả về 1 node nếu tồn tại selectoer đó, ngược lại nó sẽ trả về null
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode);
console.log(singleNode2);
console.log(singleNode3);

// 2.2 document,querySelectorAll("selector") -> trả về một Nodelist chứa danh sách các node, nếu không có thì trả về empty 
// Nodelist có thể loop (for, for of) và forEach giống như mảng nhưng không thể dùng các phương thức push, pop, shift, unshift, map, filter,...
const multiNodes = document.querySelectorAll(".item")
console.log(multiNodes);

// 2.3 document.getElementsByClassName("className") -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty
const classNode = document.getElementsByClassName("item");
console.log(classNode);

// 2.4 document.getElementsByTagName("tagName")
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

// 2.5 document.getElementById("id") -> trả về 1 node nếu có id đó, nếu không sẽ là null
const idNode = document.getElementById("spinner");
console.log(idNode);

/** Phân biệt Nodelist và HTMLCollection */
/* Giống: 
 *       - có thể truy xuất bằng index
 *       - có độ dài (length)
 *       - giống mảng nhưng không phải là mảng, ko sử dụng được các phương thức như pop(), push(), shift(),... 
 *       - dùng được vòng lặp (for, for of) 
 */
/* Khác:
 * NodeList:
 *      - Sử dụng được forEach()
 * HTMLCollection: 
 *      - Không sử dụng được forEach()
 */