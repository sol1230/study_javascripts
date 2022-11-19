// const fs = require("fs");
// const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

// 9498
// if (100 >= a && a > 89) {
//   console.log("A");
// } else if (89 >= a && a > 79) {
//   console.log("B");
// } else if (79 >= a && a > 69) {
//   console.log("C");
// } else if (69 >= a && a > 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 2753
let a = Number(input[0]);

if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
