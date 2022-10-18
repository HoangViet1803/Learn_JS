// 2 cách để sao chép một mảng
const students = ["a", "b", "c", "d", "e", "f"];
// Cách 1: sử dụng phương thức slice()
const sliceStudents = students.slice();
console.log(sliceStudents);

// Cách 2: spread operator
const cloneStudent = [...students];
console.log(cloneStudent);