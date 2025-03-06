const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
let sum = 0;
let count = 0;

while(true){
    let N = Number(input[index]);
    index++;

    if(parseInt(N/10) == 2){
        sum += N;
        count++;
    } else{
        console.log((sum/count).toFixed(2));
        break;
    }
}