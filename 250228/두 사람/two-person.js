const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let input1 = input[0].split(" ");
let input2 = input[1].split(" ");

let Aage = Number(input1[0]);
let Asex = input1[1];
let Bage = Number(input2[0]);
let Bsex = input2[1];

if((Aage >= 19 && Asex == "M") || (Bage >=19 && Bsex == "M")){
    console.log("1");
} else {
    console.log("0");
}