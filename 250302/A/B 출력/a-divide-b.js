const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";
result += parseInt(A / B) + ".";

A %= B;
for (let i = 0; i < 20; i++){
    A *= 10;
    result += parseInt(A / B);

    A %= B;
}

console.log(result);