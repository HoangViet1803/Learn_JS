// ({a:1, b:2},'b') -> {a:1}
function isObject(value) {
    if ((typeof value === 'object') && !Array.isArray(value) && value !== null) {
        return true
    }
    return false
}

function without(obj, ...key) {
    const newObj = {...obj }
    if (!isObject(newObj)) return;
    console.log(key);
    key.forEach(item => {
        delete newObj[item]
    })
    return newObj
}
console.log(without({ a: 1, b: 2, c: 3 }, 'a', 'b'));