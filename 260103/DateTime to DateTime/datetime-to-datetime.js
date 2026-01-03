const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b, c] = input;

if(a < 11 ||  a == 11 && b < 11 || a == 11 && b == 11 && c < 11){
    console.log(-1);
} else {
    console.log((a-11)*60*24 + (b-11)*60 + (c-11));
}