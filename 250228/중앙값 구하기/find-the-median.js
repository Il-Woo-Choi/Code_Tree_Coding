const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

if((A > B && A < C) || (A < B && A > C)){
    console.log(A);
} else if((B > A && B < C) || (B < A && B > C)){
    console.log(B);
} else{
    console.log(C);
}