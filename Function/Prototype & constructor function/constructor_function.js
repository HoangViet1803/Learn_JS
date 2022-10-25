// Constructor function
function Student(name, age) {
    // this = {}
    // add properties to this
    this.name = name;
    this.age = age;

    this.getName = function (){
        return `your name is ${this.name}`
    }
    // return this
}
let student1 = new Student("Henry", 20)
console.log(student1.age);
console.log(student1.getName())

// Prototype
Student.prototype.getInfor = function (){
    return `Name: ${this.name}, Age: ${this.age}`
}
let student2 = new Student("Thuy", 20)
console.log(student2.getInfor())

// bind: là 1 hàm nằm trong function prototype, thường được sử dụng để xác định tham số 'this'
const sinhVien = {
    firstName: "Viet",
    lastName: "Henry",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
const btn = document.querySelector("#btn");
btn.addEventListener('click',sinhVien.fullName.bind(sinhVien));

// Ex
const selector = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
console.log(selector('#btn'))