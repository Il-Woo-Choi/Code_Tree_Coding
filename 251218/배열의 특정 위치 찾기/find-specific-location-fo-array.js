const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum1 = 0;
let sum2 = 0;
let count = 0;
let avg = 0;

for(let i = 0; i < input.length; i++){
    if(i % 2 === 1){
        sum1 += input[i];
    }
    if((i+1) % 3 === 0){
        sum2 += input[i];
        count++;
    }

}

avg = (sum2 / count).toFixed(1);

console.log(sum1, avg);