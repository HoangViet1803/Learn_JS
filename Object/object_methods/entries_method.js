const student = {
    name: "Viet",
    "last-name": "Henry",
    age: 21,
    male: true,
    hi: function() {
        console.log(`hello ${this.name}`);
    }
};

// Object.entries(object_name) -> trả về một mảng nested gồm key và value
const entries = Object.entries(student);
console.log(entries);