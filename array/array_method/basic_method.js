const student = ["viet", "manh", "thu", "dat", "hieu", "manh"];
// length -> trả về độ dài của mảng
console.log(student.length);

// reverse() -> đảo ngược giá trị trong mảng, làm thay đổi mảng cũ
console.log(student.reverse());

// join() -> nối các phần tử trong mảng thành string
/** Syntax */
// arr.join()
// arr.join(separator)
console.log(student.join());

// includes() -> kiểm tra mảng đó có chứa phần tử nào đó không, trả ra giá trị true hoặc false
console.log(student.includes("viet")); // true

// indexOf() -> trả về vị trí của phần tử đầu tiên được tìm thấy, nếu ko tìm được sẽ trả về -1
console.log(student.indexOf("hieu")); // 1
console.log(student.indexOf("thuy")); // -1

// lastIndexOf() -> trả về vị trí của phần tử cuối cùng thỏa mãn điều kiện được tìm thấy
console.log(student.lastIndexOf("manh")); // 4

// push() -> thêm phần tử vào cuối mảng, trả về độ dài mới của mảng
/** Syntax */
// arr.push(element0)
// arr.push(element0, element1)
// arr.push(element0, element1, /* … ,*/ elementN)
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // 4
console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]

// unshift() -> thêm phần tử vào đầu mảng, trả về độ dài mới của mảng
/** Syntax */
// arr.unshift(element0)
// arr.unshift(element0, element1)
// arr.unshift(element0, element1, /* … ,*/ elementN)
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // 5
console.log(array1); // Array [4, 5, 1, 2, 3]

// pop() -> xóa phần tử cuối cùng trong mảng, thay đổi mảng đó và trả về phần tử bị xóa
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // "tomato"
console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]

// shift() -> xóa phần tử đầu tiên trong mảng, thay đổi mảng đó và trả về phần tử bị xóa
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log(array1); // Array [2, 3]
console.log(firstElement); // 1