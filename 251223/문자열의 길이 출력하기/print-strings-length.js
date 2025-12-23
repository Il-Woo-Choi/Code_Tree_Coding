const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = 0;

for(let str of input){
    n += str.length;
}

console.log(n);