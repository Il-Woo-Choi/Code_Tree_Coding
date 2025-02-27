const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

let sqr = N*N;

if(N < 5){
    console.log(sqr);
    console.log("tiny");
} else{
    console.log(sqr);
}