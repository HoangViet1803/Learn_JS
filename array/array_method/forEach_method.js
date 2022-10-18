/** Syntax */
// Arrow function
// arr.forEach((element) => { /* … */ })
// arr.forEach((element, index) => { /* … */ })
// arr.forEach((element, index, array) => { /* … */ })

// Callback function
// arr.forEach(callbackFn)
// arr.forEach(callbackFn, thisArg)

// Inline callback function
// arr.forEach(function(element) { /* … */ })
// arr.forEach(function(element, index) { /* … */ })
// arr.forEach(function(element, index, array){ /* … */ })
// arr.forEach(function(element, index, array) { /* … */ }, thisArg)

/**
 * không trả về mảng mới
 * ko có return như map 
 * ko dừng do ko có return
 */

const array1 = ['a', 'b', 'c']
array1.forEach(element => console.log(element));