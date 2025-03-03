const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let sum = 0;

for(A; A<=B; A++){
    sum += A;
}

console.log(sum);