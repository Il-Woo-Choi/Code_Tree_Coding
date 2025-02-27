const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let A = Number(input);

if(A % 2 == 1){
    A += 3;
}

if(A % 3 == 0){
    A /= 3;
}

console.log(A);