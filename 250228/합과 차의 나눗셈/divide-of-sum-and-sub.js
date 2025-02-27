const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let answer = Math.round(((a+b) / (a-b)).toFixed(3));
console.log(answer);