/** split():  method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array */
// string.splt()
// string.split(separator)
// string.split(separator, limit)

/** 
 * Chỉ dùng cho string
 * Chia một chuỗi thành các chuỗi con
 * Trả về là một mảng
 * Không làm thay đổi chuỗi gốc
 */
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // "fox"

const chars = str.split('');
console.log(chars[8]); // "k"

const strCopy = str.split();
console.log(strCopy); //  Array ["The quick brown fox jumps over the lazy dog."]