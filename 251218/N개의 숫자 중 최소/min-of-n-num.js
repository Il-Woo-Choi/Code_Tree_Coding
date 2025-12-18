const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split(" ").map(e => Number(e));
let cnt = 1;
let minVal = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < n; i++){
    if(a[i] < minVal){
        minVal = a[i];
    } else if(a[i] === minVal){
        cnt++;
    }
}

console.log(minVal, cnt);