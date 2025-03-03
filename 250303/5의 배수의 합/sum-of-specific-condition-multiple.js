const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let sum = 0;

if(A > B){
    for(let i = B; i <= A; i++){
        if(i % 5 == 0){
            sum += i;
        }
    }
} else {
    for(let i =A; i <= B; i++){
        if(i % 5 == 0){
            sum += i;
        }
    }
}

console.log(sum);