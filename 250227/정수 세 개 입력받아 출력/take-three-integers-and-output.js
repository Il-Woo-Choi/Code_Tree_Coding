const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let [a, b] = Number(input[0]);
let c = Number(input[1].split("\n"));

console.log(a, b, c);