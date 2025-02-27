const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let S = input[0];
let T = input[1];

[T, S] = [S, T];

console.log(S);
console.log(T);