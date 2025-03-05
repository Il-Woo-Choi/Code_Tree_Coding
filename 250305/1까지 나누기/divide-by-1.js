const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let i = 1;
let count = 0;

while(N/i > 1){
    N /= i;
    count++;
    i++;
}

console.log(count+1);