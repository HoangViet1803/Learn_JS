/** substring(): method returns the part of the string between the start and end indexes, or to the end of the string (it doesn't include the stopping index)*/
// string.substring(indexStart)
// string.substring(indexStart, indexEnd)
const str = 'Mozilla';

console.log(str.substring(1, 3)); // "oz"

console.log(str.substring(2)); // "zilla"