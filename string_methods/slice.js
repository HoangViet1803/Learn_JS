/**  slice() method extracts a section of a string and returns it as a new string, without modifying the original string */
// string.slice(indexStar)
// string.slice(indexStar, indexEnd)
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); // "the lazy dog."

console.log(str.slice(4, 19)); // "quick brown fox"

console.log(str.slice(-4)); // "dog."

console.log(str.slice(-9, -5)); // "lazy"