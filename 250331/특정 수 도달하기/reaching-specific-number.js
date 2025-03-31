const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
let cnt = 0;
for(let elem of input){
    if(elem >= 250){
        break;
    } else {
        sum += elem;
        cnt++;
    }
}

console.log(sum + " " + (sum/cnt).toFixed(1));