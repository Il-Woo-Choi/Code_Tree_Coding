const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let input1 = input[0].split(" ");
let input2 = input[1].split(" ");

let AMath = Number(input1[0]);
let AEnglish = Number(input1[1]);
let BMath = Number(input2[0]);
let BEnglish = Number(input2[1]);

if (AMath > BMath){
    console.log("A");
} else if(AMath == BMath){
    if(AEnglish > BEnglish){
        console.log("A");
    } else{
        console.log("B");
    }
} else{
    console.log("B");
}