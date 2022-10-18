// 2 cách khai báo object
// cách 1: object literal
const objectLiteral = {};
// cách 2: object constructor
const objectConstructor = new Object();

const student = {
    name: "Viet",
    "last-name": "Henry",
    age: 21,
    male: true,
    hi: function() {
        console.log(`hello ${this.name}`);
    }
}

// method
// 2 cách truy xuất giá trị của object
// Cách 1: Sử dụng Dot notation object.key
console.log(student.name);
// Cách 2: Brackets notation object["key"]
console.log(student["last-name"]);

// thêm & thay đổi giá trị của object
student.age = 22;
student.isDeveloper = true
console.log(student);
// xóa giá trị trong object
delete student["last-name"];
console.log(student);

// for...in loop
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

/** CÁCH SAO CHÉP MỘT OBJECT */
const newStudent = {...student };
newStudent.name = "Chu";
console.log(student);
console.log(newStudent);

/** CÁCH SAO CHÉP MỘT OBJECT PHỨC TẠP (nested object) **/
const user = {
    name: "Viet",
    school: {
        name: "FPT",
        add: "Ha Noi",
        class: {
            name: "IT",
                teacher: "Dai"
        }
    }
};
const newUser = JSON.parse(JSON.stringify(user));
newUser.school.class.name = "Design";
console.log(user);
console.log(newUser);

// Destructuring object
const { name, school } = newUser;
console.log(name);