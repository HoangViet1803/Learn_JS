// object.hasOwnProperty(key) -> trả về giá trị true nếu object chứa key, ngược lại trả về false
const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('toString')); // false
console.log(object1.hasOwnProperty('hasOwnProperty')); // false