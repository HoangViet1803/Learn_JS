// Arrow function
// arr.map((element) => { /* … */ })
// arr.map((element, index) => { /* … */ })
// arr.map((element, index, array) => { /* … */ })

// Callback function
// arr.map(callbackFn)
// arr.map(callbackFn, thisArg)

// Inline callback function
// arr.map(function(element) { /* … */ })
// arr.map(function(element, index) { /* … */ })
// arr.map(function(element, index, array){ /* … */ })
// arr.map(function(element, index, array) { /* … */ }, thisArg)

/**
 * Sử dụng map() có 1 mảng và muốn xử lý từng phần tử của mảng theo cùng 1 cách và trả về một mảng có số lượng phần tử bằng đúng số lượng phần tử của mảng ban đầu
 * duyệt qua từng phần tử trong mản và trả ra một mảng mới mà không thay đổi mảng ban đầu
 */

const listNumber = [1, 2, 3, 4, 5];
// Ex: trả ra một mảng mới mà các số (giá trị) trong mảng gấp đôi giá trị ban đầu
const myListNumber = listNumber.map((element) => element * 2);
console.log(myListNumber);