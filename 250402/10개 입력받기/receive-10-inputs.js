const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
let cnt = 0;
for(let i = 0; i < 10; i++){
    if(input[i] === 0){
        break;
    } else {
        sum += input[i];
        cnt++;
    }
}

console.log(sum + " " + (sum/cnt).toFixed(1));