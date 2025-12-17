const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");


let a = [];
for(let elem of input.map(e => Number(e))) {
    if(elem < 250){
        a.push(elem);
    } else {
        break;
    }
}

let sum = 0;
let avg = 0;

for(let i = 0; i < a.length; i++){
    sum += a[i];
}

avg = (sum / a.length);

console.log(`${sum} ${avg}`);