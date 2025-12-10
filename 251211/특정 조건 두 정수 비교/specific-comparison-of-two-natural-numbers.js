const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C, D = 0;

if(A < B){
    C = 1;
} else {
    C = 0;
}

if(A == B){
    D = 1;
} else {
    D = 0;
}

console.log(C + " " + D);