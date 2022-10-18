let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // addition
let diff = numOne - numTwo // subtraction
let mult = numOne * numTwo // multiplication
let div = numOne / numTwo // division
let remainder = numOne % numTwo // modulus
let powerOf = numOne ** numTwo // Exponential
console.log(sum, diff, mult, div, remainder, powerOf)

/** Assignment Operator */
let x = 3;
let y = 5;
x += y; // x = x + y
x -= y; // x = x- y
x *= y; // x = x * y
x /= y // x = x / y;
x %= y // x = x % y;
x **= y // x = x ** y

/** Comparison Operators: trả kết quả true hoặc false  */
// x == y : so sánh giá trị, không so sánh kiểu dữ liệu
// x === y : so sánh cả giá trị và kiểu dữ liệu
// x != y
// x > y
// x < y
// x >= y
// x <= y

/** Logical Operators */
// &&(ampersand)
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// ||(pipe)
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

// !(negation)

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

// Increment Operator and Decrement Operator
// Pre-increment
let n = 0
console.log(++n)        // 1
console.log(n)          // 1

//Post-increment
let i = 0
console.log(i++)        // 0
console.log(i)          // 1

/**
 * ++i tăng giá trị của i lên 1 và trả về giá trị mới đó.
 * i++ cũng tương tự nhưng giá trị trả về là giá trị ban đầu của i trước khi được tăng lên 1.
 */