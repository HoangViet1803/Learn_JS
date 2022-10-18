const student = {
    name: "Viet",
    "last-name": "Henry",
    age: 21,
    male: true,
    hi: function() {
        console.log(`hello ${this.name}`);
    }
}

// Object.keys(object_name) -> trả về một mảng chứa tất cả các key của object
const keys = Object.keys(student);
console.log(keys);