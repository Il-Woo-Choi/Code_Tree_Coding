const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split(" ");

let ans = "";

for(let i = (a.length-1); i >= 0; i--){
    if(a[i] % 2 ===  0){
        ans += a[i] + " ";
    }
}

console.log(ans);