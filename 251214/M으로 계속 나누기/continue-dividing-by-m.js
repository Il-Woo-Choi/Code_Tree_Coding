const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

while(n > 0) {
    console.log(n);
    n = Math.floor(n / m);
}