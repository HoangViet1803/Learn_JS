// đảo ngược chuỗi - lv2
const myString = "My name is Viet";

function reverseString(s) {
    if (!s) return null;
    const arr = s.split(" ");
    const newArr = arr.map(element => element.split("").reverse().join(""));;
    return newArr.join(" ");
}
console.log(reverseString(myString));