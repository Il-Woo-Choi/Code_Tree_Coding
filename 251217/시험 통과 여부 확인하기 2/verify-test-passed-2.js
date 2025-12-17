const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++){
    let row = input[i].split(" ").map(Number);
    arr.push(row);
}

let count = 0;

for(let elem of arr){
    let sum = 0;
    let avg = 0;
    for(let a of elem){
        sum += a;
    }
    avg = sum / 4;
    if(avg >= 60){
        console.log("pass");
        count++;
    } else {
        console.log("fail");
    }
}

console.log(count);