const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let evenSum = 0;
let sum = 0;
let cnt = 0;

for(let i = 0; i < 10; i++){
    if(i % 2 === 1){
        evenSum += input[i];
    }

    if(i === 2 || i === 5 || i === 8){
        sum += input[i];
        cnt++;
    }
}

console.log(evenSum + " " + (sum/cnt).toFixed(1));