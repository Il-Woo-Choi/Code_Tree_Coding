const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let oddSum = 0;
let evenSum = 0;

for(let i = 0; i < input.length; i++){
    if(i % 2 === 1){
        evenSum += input[i];
    } else {
        oddSum += input[i];
    }
}

console.log(Math.abs(evenSum - oddSum));
