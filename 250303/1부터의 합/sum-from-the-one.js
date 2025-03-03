const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let sum = 0;

for(let i = 1; i <= 100; i++){
    if(sum >= N){
        sum -= i-1;
        break;
    }
    sum += i;
}

console.log(sum);