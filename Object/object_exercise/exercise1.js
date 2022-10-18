// viết 1 function kiểm tra value có phải là object hay không
// lưu ý: trong Js {}, [], null đều có type là object
function isObject(value) {
    if ((typeof value === 'object') && !Array.isArray(value) && value !== null) {
        return true
    }
    return false
}