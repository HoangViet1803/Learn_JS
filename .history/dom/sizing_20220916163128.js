// 1. offsetWidth, offsetHeight, offsetLeft, offserParent, offsetTop
const boxed = document.querySelector(".boxed");
/** offsetWidth -> trả về độ rộng của phần tử */
console.log(boxed.offsetWidth);
/** offsetHeight -> trả về chiều cao của phần tử */
console.log(boxed.offsetHeight);
/** offsetLeft -> trả về vị trí của phần tử so với bên trái */
console.log(boxed.offsetLeft);
/** offsetTop -> trả về vị trí của phần tử so với top */
console.log(boxed.offsetTop);
/** offsetParent -> lấy ra phần tử cha để lấy giá trị của phần tử cha */
console.log(boxed.offsetParent);

// 2. clientWidth, clientHeight, clientLeft, clientTop
/** clientWidth -> trả về độ rộng của phần tử trừ đi border */
console.log(boxed.clientWidth);
/** clientHeight -> trả về chiều cao của phần tử trừ đi border */
console.log(boxed.clientHeight);