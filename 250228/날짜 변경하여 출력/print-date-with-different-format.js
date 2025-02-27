const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");

let y = Number(input[0]);
let m = Number(input[1]);
let d = Number(input[2]);

console.log(m + "-" + d + "-" + y);