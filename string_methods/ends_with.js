/** endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false). */
// string.endsWith(substring)
// string.endsWith(substring, length)
let myString = "Love is the best to in this world"
let love = 'world';
console.log(myString.endsWith(love))
console.log(myString.endsWith('world')) // true
console.log(myString.endsWith('love')) // false
console.log(myString.endsWith('in this world')) // true