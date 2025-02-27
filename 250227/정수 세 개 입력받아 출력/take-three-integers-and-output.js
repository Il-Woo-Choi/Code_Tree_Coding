const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let input1 = input[0].split(" ");
let a = Number(input1[0]);
let b = Number(input1[1]);

let c = Number(input[1]);

console.log(a, b, c);