const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let count = 0;
let i = 1;

while (N > 1) {
    N = Math.floor(N / i);
    count++;
    i++;
}

console.log(count);