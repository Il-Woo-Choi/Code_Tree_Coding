const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ").map(Number);
let N = a[0];
let M = a[1];
let b = input[1].split(" ").map(Number);
let cnt = 0;

for(let elem of b){
    if(elem === M){
        cnt++;
    }
}

console.log(cnt);