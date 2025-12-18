const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = 0;
let B = 0;
let C = 0;
let D = 0;

for(let i = 0; i < input.length; i++){
    input[i] = input[i].split(" ");
    if(input[i][0] === "Y" && input[i][1] >= 37){
        A++;
    } else if(input[i][0] === "N" && input[i][1] >= 37){
        B++;
    } else if(input[i][0] === "Y" && input[i][1] < 37){
        C++;
    } else {
        D++;
    }
}

let warning = "";

if(A >= 2){
    warning = "E";
}

console.log(A, B, C, D, warning);