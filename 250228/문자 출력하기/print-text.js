const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let result = "";

for(i = 0; i < 8; i++){
    result += "G";
}

console.log(result);