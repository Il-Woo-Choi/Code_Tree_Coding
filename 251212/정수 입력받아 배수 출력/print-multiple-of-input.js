const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

let result = "";

for(let i = 1; i < 6; i++){
    result += (N*i) + " ";
}

console.log(result);