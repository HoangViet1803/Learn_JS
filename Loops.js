/** Loops
 * for Loop
 * while loop
 * do while loop
 * for of loop
 * break
 * continue
 */

/** for Loop */
// For loop structure
//  for(initialization, condition, increment/decrement){
         // code goes here
//  }

// EX1:
for (let i = 0; i <= 5 ; ++i) {
    console.log(i)
}

// EX2:
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

/** while loop */
let a = 0
while (a <= 5) {
  console.log(a)
  a++
}

/** do while */
let b = 0
do {
  console.log(b)
  i++
} while (i <= 9)

// Sự khác nhau giữa while và do-while: đối với vòng lặp do-while thì ở lần đầu tiên, đoạn mã được thực thi mà không cần phải kiểm tra điều kiện (điều kiện đúng hay sai thì đoạn mã vẫn được thực thi ít nhất 1 lần)

/** for of loop */
const countriess = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const myArr = []
for(const country of countriess){
  myArr.push(country.toUpperCase())
}

console.log(myArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

/** break: được sử dụng để ngắt một vòng lặp (vòng lặp sẽ kết thúc mặc cho điều kiện có còn đúng hay không) */ 
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
};

/** continue: sử dụng để bỏ qua một số lần lặp nhất định (khi lệnh continue được thực thi, những câu lệnh còn lại của lần lặp hiện tại sẽ bị bỏ qua)  */
for(let i = 0; i <= 5; i++){
    if(i == 3 || i == 4){
      continue
    }
    console.log(i)
  }
  