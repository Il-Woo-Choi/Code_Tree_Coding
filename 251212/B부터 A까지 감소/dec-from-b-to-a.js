const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

for(let i = B; i >= A; i--){
    result += i + " ";
}

console.log(result);