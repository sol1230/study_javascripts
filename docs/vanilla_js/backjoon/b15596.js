// const fs = require("fs");
// const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

// 작성해야 하는 함수는 다음과 같다.

// a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// n: 합을 구해야 하는 정수의 개수
// 리턴값: a에 포함되어 있는 정수 n개의 합

function sum(items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}

let array = [1, 2, 3, 4];
console.log(sum(array));
