const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

if(N >= 3000){
    console.log("book");
} else if(N < 3000 && N >= 1000){
    console.log("mask");
} else{
    console.log("no");
}