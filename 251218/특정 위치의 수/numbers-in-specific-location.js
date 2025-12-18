const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(e => Number(e));

let sum = input[2] + input[4] + input[9];
console.log(sum);