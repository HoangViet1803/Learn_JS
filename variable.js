// Có 3 cách khai báo biến trong JS: sử dụng từ khóa var, let hoặc const
var name = 'Hoang Viet';
let age = 21;
const gender = 'male';

// Lưu ý khi đặt tên biến:
/**
 * Tên biến có thể chứa chữ cái, chữ số, dấu gạch dưới và kí hiệu "$"
 * Tên phải bắt đầu bằng một chữ cái hoặc "$" hoặc dấu gạch dưới
 * Tên phân biệt chữ hoa chữ thường
 * Không dùng các từ khóa của JS làm tên biến
 * Nên sử dụng phong cách Camel case để đặt tên biến
 */

/** PHÂN BIỆT var, let, const */

/** var:
 * có thể khai báo lại
 * có thể gán giá trị nhiều lần (re-assign)
 */
var firstName = "DavidBecker";
var firstName = "Tony"; // OK
firstName = "Jonh" // OK

/** let
 * có thể gán giá trị nhiều lần (non re-assign)
 * không được khai báo lại
 */
let myName = 'henry';
myName = 'viet';
// let myName = "Jonh" // Indentifier "name" has already been declared

/** const
 * dùng để khai báo một giá trị hằng 
 * chỉ có thể gán giá trị 1 lần
 * không được khai báo lại
 * khi khai báo const mà không gán giá trị sẽ báo lỗi
 */
const PI = 3.14;

// HOISTING với var, let và const
/** hoisting là hành động mặc định của JS, nó sẽ di chuyển các khai báo biến và functuons lên đầu. */

/** ví dụ minh họa */
// code trong file js
console.log(sum(2, 3));
console.log(city);

function sum(a, b) {
    return a + b;
};
var city = "Ha Noi";
// Code khi browser chạy file js
function sum(x, y){
    return x + y
}
var city
console.log(sum(2, 3));
console.log(city);

function sum(a, b) {
    return a + b;
};
var city = "Ha Noi";

/** hoisting:  Khi gọi các biến trước khi khai báo
 * var có giá trị ban đầu là undefined
 * let hoặc const khi được hoist không khởi tạo giá trị với undefined và không được khởi tạo tới khi câu lệnh định nghĩa chúng được chạy tới
 * let hoặc const sẽ thông báo là Uncaught ReferenceError: Cannot access '...' before initialization
 */


// SCOPE
/**
 * Global Scope: biến khai báo ở scope này sẽ có phạm vi sử dụng toàn file (biến toàn cục)
 * Local Scope: biến khai báo sẽ có phạm vi sử dụng bên trong function mà nó được khai báo (biến cục bộ)
 */

var animal = 'pig'; // animal là biến toàn cục

function weight() {
    var w = 100; // w là biến cục bộ
    console.log(animal + ":" + w + "kg");
}
weight(); // OK
console.log(animal); // OK
console.log(w) // Error

/** var trong local scope
 * Khi 1 biến var được khai báo trong function thì nó sẽ có phạm vi function scope
 * Function scope: biến đó sẽ được dùng ở bất cứ đâu trong function đó
 * Bên ngoài sẽ không gọi được biến đó.
 */

/** let và const trong local scope
 * khi 1 biến let hoặc const được khai báo trong mệnh đề if hoặc vòng lặp thì nó sẽ có phạm vi block scope
 * Block scope: biến đó chỉ được sử dụng trong mệnh đề if hoặc vòng lặp. Bên ngoài sẽ không gọi được biến đó
 */