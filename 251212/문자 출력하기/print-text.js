const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = "";

for(i = 0; i < 9; i++){
    result += input;
}

console.log(result);