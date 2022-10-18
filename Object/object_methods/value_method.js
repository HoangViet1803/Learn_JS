const student = {
    name: "Viet",
    "last-name": "Henry",
    age: 21,
    male: true,
    hi: function() {
        console.log(`hello ${this.name}`);
    }
};
// Object.values(object_name) -> trả về một mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);