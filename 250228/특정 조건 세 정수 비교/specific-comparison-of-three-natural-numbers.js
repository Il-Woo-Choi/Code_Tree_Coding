const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let [d, e] = [0, 0];

if(a <= b && a <= c){
    d = 1;
} else{
    d = 0;
}

if(a == b == c){
    e = 1;
} else{
    e = 0;
}

console.log(d, e);