// {a:1,b:2} -> [["a",1],["b",2]];
function isObject(value) {
    if ((typeof value === 'object') && !Array.isArray(value) && value !== null) {
        return true
    }
    return false
}
// Cách 1
function objectToArray(obj) {
    // check nếu không phải object thì dừng
    if (!isObject(obj)) return;
    // nếu là object thì xử lý
    return Object.entries(obj)
};
console.log(objectToArray({ a: 1, b: 2 }));

// Cách 2:
function objectToArray2(obj) {
    // check nếu không phải object thì dừng
    if (!isObject(obj)) return;
    // nếu là object thì xử lý
    const value = Object.keys(obj).map(key => [key, obj[key]]);
    return value;
};
console.log(objectToArray2({ a: 1, b: 2 }))

// Cách 3:
function objectToArray3(obj) {
    // check nếu không phải object thì dừng
    if (!isObject(obj)) return;
    // nếu là object thì xử lý
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
};
console.log(objectToArray3({ a: 1, b: 2 }))