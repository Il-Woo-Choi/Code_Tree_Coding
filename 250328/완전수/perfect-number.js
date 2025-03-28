const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let start = Number(input[0]);
let end = Number(input[1]);
let cnt = 0;

for(let i = start; i <= end; i++){
    let sum = 0;
    for(let j = 1; j < i; j++){
        if(i % j === 0 && i !== j){
            sum += j;
        }
    }

    if(sum === i){
        cnt++;
    }
}
console.log(cnt);