const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let sum = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
    if(sum >= N){
        if(N == 1){
            break;
        } else {
            sum -= i;
            break;
        }
    }
}

console.log(sum);