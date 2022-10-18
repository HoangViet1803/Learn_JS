// 2 cách gộp mảng
// Cách 1: sử dụng phương thức concat()
// arr1.concat(arr2, arr3)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const mergeArrays = arr1.concat(arr2, arr3);
console.log(mergeArrays);

// Cách 2: spread operator
const mergeArrays2 = [...arr1, ...arr2, ...arr3];
console.log(mergeArrays2);