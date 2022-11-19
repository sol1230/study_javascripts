// function name(parameter1, parameter2, parameter3) {
//   code to be excuted
//    return
// }

// param : 2(1, 3), return : 1(1 + 3)
function sum(item_1, item_2) {
  return item_1 + item_2;
}

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 5 + 8;
  let sum_function = sum(1, 2); // item_1 = 1, item_2 = 2

  console.log();
}

// anonymous Function
let calculateSum = function (item_1, item_2) {
  return item_1 + item_2;
};

{
  console.log(`${calculateSum(5, 7)}`);
}

// Arrow Function
let calculateSumSecond = (item_1, item_2) => {
  return item_1 + item_2;
};
{
  let result = calculateSumSecond(7, calculateSum);
  console.log(`${result}`);
  console.log(`${calculateSumSecond(7, 8)}`);
}

// rest parameter
function printRestParams(...args) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, [4, 5, 6], 5, 6, 7);
}
