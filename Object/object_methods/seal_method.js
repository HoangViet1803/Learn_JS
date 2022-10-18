// Object.seal(object) -> cho phép chỉnh sửa key và value nhưng không được thêm key - value mới
const car = {
    brand: "BMW",
};
const newCar = Object.seal(car);
newCar.brand = "Audi"; // chỉnh sửa được
newCar.price = 2500; // không thêm được key-value mới
console.log(newCar);