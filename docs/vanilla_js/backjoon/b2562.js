// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// let max = input[0];
// let maxIdx = 0;

// for (let i = 1; i < 9; i++) {
//   if (max < input[i]) {
//     max = input[i];
//     maxIdx = i;
//   }
// }

// console.log(max);
// console.log(maxIdx + 1);

// const nums = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map(Number);
// let max = nums[0];
// let count = 0;
// for (let i = 1; i < 9; i++) {
//   if (nums[i] > max) {
//     max = nums[i];
//     count = i;
//   }
// }
// console.log(max);
// console.log(count + 1);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
