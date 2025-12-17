const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let sum = 0;
for(let elem of input.map(e => Number(e))) {
    sum += elem;
}


console.log(sum);