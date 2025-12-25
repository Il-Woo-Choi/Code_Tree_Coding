const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let m = input[1];
let index = 0;

for(let i = 0; i < n.length - 1; i++){
    if(n.slice(i, i+2) === m){
        break;
    } else {
        index++;
    }
}

if(index == n.length-1){
    console.log(-1);
} else {
    console.log(index);
}