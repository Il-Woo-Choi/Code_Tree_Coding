const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = [];

for(let elem of input){
    if(elem !== 0){
        a.push(elem);
    } else {
        break;
    }
}

let sum = 0;

for(let i = (a.length-1); i > (a.length-4); i--){
    sum += a[i];
}

console.log(sum);