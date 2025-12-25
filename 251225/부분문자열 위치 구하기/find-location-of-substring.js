const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let m = input[1];
let foundIndex = -1;

for(let i = 0; i <= n.length - m.length; i++){
    if(n.slice(i, i + m.length) === m){
        foundIndex = i;
        break;
    }
}

console.log(foundIndex);