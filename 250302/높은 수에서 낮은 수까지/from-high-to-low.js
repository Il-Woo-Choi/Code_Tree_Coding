const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let result = "";

if(A >= B){
    for(i = 0; i < (A-B+1); i++){
        result += (A-i) + " ";
    }
} else{
    for(i = 0; i < (B-A+1); i++){
        result += (B-i) + " ";
    }
}

console.log(result);