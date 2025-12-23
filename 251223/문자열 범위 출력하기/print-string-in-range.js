const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let answer = "";

for(let i = 2; i < 10; i++){
    answer += input[i];
}

console.log(answer);