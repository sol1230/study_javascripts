// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);

// recommand this way
let concate_string = `${number_first}${string_second}`;
console.log();

string_second = "A";
console.log(number_first + string_second);

// strings
let animal = "tiger";
console.log(animal);

// typeof number_first;
// ("number");
// typeof string_second;
// ("string");
// typeof animal;
// ("string");
// animal.substring(0, 3);
// ("tig");
// animal.replace("ti", "TI");
// ("TIger");
// animal.toUpperCase("tiger");
// ("TIGER");
// animal.charAt(0);
// ("t");
// animal.replace("ti", "TI");
// ("TIger");
// animal.charAt(0);
// ("t");
// animal.split("g")(2)[("ti", "er")];
// 0:
// 'ti'
// 1:
// 'er'
// length:
// 2
// [[Prototype]]:
// Array(0)
// [[Prototype]]:
// Object

let sentance = "5 2 6";
let trims = sentance.trim(); // 공백제거
let splits = trims.split(" "); // 공백으로 배열 만듦
let maps = splits.map(Number); // 각 배열을 String To Number

// splits[0] + splits[1] + splits[2];
// ("526");

// split
console.log(maps[0] + maps[1] + maps[2]); // 합산

let inputs = sentance.trim().split(" ").map(Number);
console.log(inputs[0] + inputs[1] + inputs[2]); // 합산
