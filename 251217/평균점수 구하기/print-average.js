const fs = require("fs");
let score = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0;
let avg = 0;

for(let elem of score) {
    sum += elem;
}

avg = sum / score.length;

console.log(avg.toFixed(1));