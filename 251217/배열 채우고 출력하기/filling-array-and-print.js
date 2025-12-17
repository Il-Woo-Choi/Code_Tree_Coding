const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

input.reverse();
let a = "";
for(let i = 0; i < input.length; i++){
    a += input[i];
}
console.log(a);