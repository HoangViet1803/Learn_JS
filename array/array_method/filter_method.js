// sử dụng khi có một mảng nhưng chỉ muốn lấy các phần tử theo 1 tiêu chuẩn nhất định
// sàng lọc các phần tử trong mảng thỏa mãn điều kiện nào đó, không làm thay đổi mảng cũ

/** Syntax */
// Arrow function
// arr.filter((element) => { /* … */ } )
// arr.filter((element, index) => { /* … */ } )
// arr.filter((element, index, array) => { /* … */ } )

// Callback function
// arr.filter(callbackFn)
// arr.filter(callbackFn, thisArg)

// Inline callback function
// arr.filter(function(element) { /* … */ })
// arr.filter(function(element, index) { /* … */ })
// arr.filter(function(element, index, array){ /* … */ })
// arr.filter(function(element, index, array) { /* … */ }, thisArg)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
console.log(words);