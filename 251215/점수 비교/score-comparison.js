const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ");
let b = input[1].split(" ");

if(Number(a[0]) > Number(b[0]) && Number(a[1]) > Number(b[1])){
    console.log(1);
} else {
    console.log(0);
}