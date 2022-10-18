/** DATA TYPES IN JS
 ** Primitive data types: (non-modifiable)
 *      1. Numbers - Integer, floats
 *      2. String
 *      3. Booleans - true or false value
 *      4. Null - đại diện cho nothing, hoàn toàn không xác định, không xác định được thứ không được xác định
 *      5. Undefined - a declared variable without a value
 *      6. Symbol
 *
 *** Primitive data types are compared by its values.
 * EX:
 *      let numOne = 3;
 *      let numTwo = 3;
 *      console.log(numOne == numTwo) // True
 * 
 ** Non-primitive data types: (modifiable)
 *      1. Objects
 *      2. Arrays
 * 
 * Cannot be compared by value
 * EX:
 *      let nums = [1, 2, 3];
 *      let numbers = [1, 2, 3];
 *      console.log(nums == numbers) // false
 * 
 * Two objects are only strictly equal if they refer to the same underlying object.
 * EX:
 *      let nums = [1, 2, 3];
 *      let numbers = nums;
 *      console.log (nums == numbers) // true
 */


/** NUMBER: là số nguyên và số thập phân, có thể thực hiện tất cả các phép toán số học */
let n1 = 3;
let n2 = 4;
console.log(n1 + n2)

// Math Object:
const PI = Math.PI;
console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3 rounding down
console.log(Math.ceil(PI)); // 4 rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value
const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Create random number between 0 to 10
const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9
console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

/** STRING: are texts, which are under single , double, back-tick quote */
let space = ' '; // an empty space string
let firstName = 'David';
let lastName = 'Becker';
let country = 'Viet Nam';
let city = "Ha Noi";
let language = 'Javascript';
let job = 'developer';
let age = 22;

/***  String Concatenation (nối chuỗi) ***/
// Concatenating using addition operator
let fullName = firstName + space + lastName;
let personInfor = fullName + '. I am ' + age + '.I live in ' + country

// Template string
// Syntax: `String`
let n3 = 4;
let n4 = 5;
console.log(`The sum of ${n3} and ${n4} is ${n3+n4}`);
console.log(`${n3} is greater than ${n4}: ${n3 > n4}`);

/** Symbol:
 * là một kiểu dữ liệu mới trong Js
 * mỗi Symbol là một giá trị sơ khai đơn nhất và bất biến có thể được dùng như một khóa của Object*/
