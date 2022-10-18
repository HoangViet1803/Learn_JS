/** Conditionals
 * if
 * if-else
 * if-else if-else
 * switch
 * Ternary Operators
 */

// if
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
};

// if-else
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
};

// if-else if-else
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
};

// switch
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
};

//Ternary Operators
let isRainingg = true;
isRainingg
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')