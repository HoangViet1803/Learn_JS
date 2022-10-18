/** trimStart():  Removes trailing space in the beginning of a string. */
// string.trimStart()
// string.trimLeft()
const greeting = '   Hello world!   ';

console.log(greeting); // "   Hello world!   ";

console.log(greeting.trimStart()); // "Hello world!   ";