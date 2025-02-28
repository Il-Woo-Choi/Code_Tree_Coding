const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = input;
let result = "";

for(i = 0; i < 8; i++){
    result += N;
}

console.log(result);