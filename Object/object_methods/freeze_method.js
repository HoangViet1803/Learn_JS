// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
    brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi"; // không chỉnh sửa được
console.log(newCar);