const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let result = "";

for(i = n; i <= 100; i++){
    result += (i + " ");
}

console.log(result);