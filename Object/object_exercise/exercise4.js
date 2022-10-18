// kiểm tra 2 object có bằng nhau không
function isEqualObject(obj1, obj2) {
    // check key length of two object
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if (objkey1.length !== objkey2.length) {
        return "Not equal"
    }
    // check value of two object
    const result = objkey1.every(key => obj1[key] === obj2[key]);
    return result;
};
console.log(isEqualObject({ a: 1 }, { a: 1 }));