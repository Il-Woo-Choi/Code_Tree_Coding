const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
let sum = 0;
let count = 0;

for(let elem of input){
    if(elem !== 0){
        arr.push(elem);
    } else{
        break;
    }
}

for(let elem of arr){
    if(elem % 2 === 0){
        count++;
        sum += elem;
    }
}

console.log(count, sum);