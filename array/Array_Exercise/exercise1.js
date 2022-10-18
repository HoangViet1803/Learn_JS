// đảo ngược chuỗi - lv1
const myString = "My name is Viet";

function reverseString(string) {
    if (!string) return null;
    return string.split(" ").reverse().join(" ");
}
console.log(reverseString(myString));