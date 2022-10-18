/*** Sử dụng cho array và string ***/

/** Syntax */
// arr.slice()
// arr.slice(start)
// arr.slice(start, end)

const animals = ["tiget", "lion", "horse", "elephant"];
// arr.slice() -> tạo ra mảng mới y hệt mảng ban đầu chứ không hề chỉnh sửa trên đối tượng array gọi đến hàm
const animals2 = animals.slice();
console.log(animals2); // ["tiget", "lion", "horse", "elephant"]

/** arr.slice(start)
 *  start: chỉ số của phần tử bắt đầu được chọn để cắt
 */
const animals3 = animals.slice(1);
console.log(animals3);

/** arr.slice(start,end)
 * start: chỉ số của phần tử bắt đầu được chọn để cắt
 * end: chỉ số của phần tử được cắt đến
 * slice sẽ chỉ lấy đến phần tử có vị trí từ "start" đến "end - 1"(không bao gồm end)
 */
let array = [1, 2, 3, "hello world", 4.12, true];
let newArray = array.slice(1, 4);
console.log(newArray);