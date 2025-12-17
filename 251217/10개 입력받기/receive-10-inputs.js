const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
let avg = 0;
let count = 0;

for(let elem of input){
    if(elem !== 0){
        sum += elem;
        count++;
    } else {
        break;
    }
}

avg = (sum / count).toFixed(1);

console.log(`${sum} ${avg}`);