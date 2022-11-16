let fs = requier("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let readFileSync = fs.readFileSync("/dev/stdin");
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs = splits.map(Number);
let inputs = fs.readFileSync(filepath).tostring().trim().split(" ").map(Number);

console.log(inputs[0] + inputs[1]);
