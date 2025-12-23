const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let long = input[0].length;
let short = input[0].length;

for(let i = 1; i < input.length; i++){
    let strLength = input[i].length;
    if(long < strLength){
        long = strLength;
    }

    if(short > strLength) {
        short = strLength;
    }
}

console.log(long - short);