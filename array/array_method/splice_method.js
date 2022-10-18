/*** Chỉ sử dụng cho array ***/

/** Syntax */
// arr.splice(start)
// arr.splice(start, deleteCount)
// arr.splice(start, deleteCount, item1)
// arr.splice(start, deleteCount, item1, item2, itemN)


/**  Công dụng
 * Dùng trong việc xóa hoặc thay thế phần tử trong mảng
 * Trả về mảng là những phần tử bị xóa
 * Thay đổi trực tiếp mảng gốc
 */
const pets = ["tiget", "lion", "horse", "elephant"];

/** arr.splice(start) 
 * start: chỉ số của phần tử đầu tiên được cắt
 */
const pets2 = pets.splice(1);
console.log(pets2); // [ 'lion', 'horse', 'elephant' ]

/** arr.splice(start, deleteCount) 
 * start: chỉ số của phần tử đầu tiên được cắt
 * deleteCount: số lượng phần tử bị xóa
 */
const pets3 = pets2.splice(1, 2)
console.log(pets3);
['horse', 'elephant']

/** arr.splice(start, deleteCount, item1) 
 * start: chỉ số của phần tử đầu tiên được cắt
 * deleteCount: số lượng phần tử bị xóa
 * items1: phần tử được thêm vào 
 */