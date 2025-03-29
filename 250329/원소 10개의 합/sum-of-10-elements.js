const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

input = input.map(Number);
let sum = 0;

for(let elem of input){
    sum += elem;
}

console.log(sum);