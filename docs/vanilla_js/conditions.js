let num = 5;
if (20 > num || 20 < num) {
  console.log("print!");
}
// 20 > num || 20 < num;
// true;

if (20 < num) {
  console.log(`20 < ${num}`);
} else if (20 > num) {
  console.log(`20 > ${num}`);
} else {
  console.log(`done`);
}

// Ternay operator
let condition = 20 < num ? `20 < ${num}` : `done`;

console.log();
