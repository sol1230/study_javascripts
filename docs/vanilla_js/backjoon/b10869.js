const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs = splits.map(Number);
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let A = inputs[0];
let B = inputs[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
