const toys = ["ball", "sword", "arrow", "magic", "water"];
// destructuring array
const [x, y, z] = toys;
console.log(x, y, z);

// rest parameters
const [ball, sword, arrow, ...rest] = toys;
console.log(rest);