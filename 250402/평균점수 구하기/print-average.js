const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;

for(let i = 0; i < 8; i++){
    sum += input[i];
}


console.log((sum/8).toFixed(1));