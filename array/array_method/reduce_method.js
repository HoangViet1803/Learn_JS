// sử dung reduce() khi có 1 mảng và muốn sử dụng các giá trị trong mảng để tạo ra thứ hoàn toàn mới

/** Syntax */
// Arrow function
// arr.reduce((previousValue, currentValue) => { /* … */ } )
// arr.reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
// arr.reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

// arr.reduce((previousValue, currentValue) => { /* … */ } , initialValue)
// arr.reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
// arr.reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
// arr.reduce(callbackFn)
// arr.reduce(callbackFn, initialValue)

// Inline callback function
// arr.reduce(function(previousValue, currentValue) { /* … */ })
// arr.reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
// arr.reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

// arr.reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
// arr.reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
// arr.reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)

const array1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial); // expected output: 10