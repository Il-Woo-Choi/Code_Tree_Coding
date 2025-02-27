const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let sum = A+B+C;
let avg = parseInt(sum/3);

console.log(sum);
console.log(avg);