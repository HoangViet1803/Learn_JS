/** Syntax */
// Arrow function
// arr.find((element) => { /* … */ } )
// arr.find((element, index) => { /* … */ } )
// arr.find((element, index, array) => { /* … */ } )

// Callback function
// arr.find(callbackFn)
// arr.find(callbackFn, thisArg)

// Inline callback function
// arr.find(function(element) { /* … */ })
// arr.find(function(element, index) { /* … */ })
// arr.find(function(element, index, array){ /* … */ })
// arr.find(function(element, index, array) { /* … */ }, thisArg)

// trả về phần tử tìm thấy đầu tiên trong mảng thoải điều kiện nào đó, nếu không tìm thấy phần tử nào sẽ trả về undefined

// EX: tìm phần tử đầu tiên trong mảng lớn hơn 10
const numbers = [1, 5, 2, 7, 3, 9, 79, 44];
const myNuber = numbers.find((element) => element > 10);
console.log(myNuber);