/** some() - Syntax */
// Arrow function
// arr.some((element) => { /* … */ } )
// arr.some((element, index) => { /* … */ } )
// arr.some((element, index, array) => { /* … */ })

// Callback function
// arr.some(callbackFn)
// arr.some(callbackFn, thisArg)

// Inline callback function
// arr.some(function(element) { /* … */ })
// arr.some(function(element, index) { /* … */ })
// arr.some(function(element, index, array){ /* … */ })
// arr.some(function(element, index, array) { /* … */ }, thisArg)

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); // true


/** every() - Syntax */
// Arrow function
// arr.every((element) => { /* … */ } )
// arr.every((element, index) => { /* … */ } )
// arr.every((element, index, array) => { /* … */ } )

// Callback function
// arr.every(callbackFn)
// arr.every(callbackFn, thisArg)

// Inline callback function
// arr.every(function(element) { /* … */ })
// arr.every(function(element, index) { /* … */ })
// arr.every(function(element, index, array){ /* … */ })
// arr.every(function(element, index, array) { /* … */ }, thisArg)

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

/**
 * some() và every() đều trả về giá trị boolean
 * với some() chỉ cần tìm thấy 1 phần tử đúng vs điều kiện sẽ trả vể true
 * với every() tất cả các phần tử thỏa mãn điều kiện mới trả về true
 */