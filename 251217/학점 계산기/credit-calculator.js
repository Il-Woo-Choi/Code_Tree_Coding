const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let point = input[1].split(" ").map(e => Number(e));

let sum = 0;
let avg = 0;

for(let elem of point){
    sum += elem;
}

avg = (sum / n).toFixed(1);

console.log(avg);

if(avg >= 4.0){
    console.log("Perfect");
} else if(avg >= 3.0){
    console.log("Good");
} else {
    console.log("Poor");
}