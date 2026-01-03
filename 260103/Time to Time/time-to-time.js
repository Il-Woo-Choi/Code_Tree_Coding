const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b, c, d] = input;

console.log((c-a) * 60 + (d-b));