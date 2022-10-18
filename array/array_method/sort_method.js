/** Syntax */
// Functionless
// arr.sort()

// Arrow function
// arr.sort((a, b) => { /* … */ } )

// Compare function
// arr.sort(compareFn)

// Inline compare function
// arr.sort(function compareFn(a, b) { /* … */ })

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // Array [1, 100000, 21, 30, 4]

// sắp xếp mảng số theo thứ tự tăng dần
const numbers = [1, 5, 2, 7, 3, 9, 79, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);