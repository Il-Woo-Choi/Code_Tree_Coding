const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;
let arr2d = [];

for(let i = 0; i < input.length; i++){
    arr2d.push(input[i].split(" ").map(Number));
}

for(let i = 0; i < arr2d.length; i++){
    for(let j = 0; j < i+1; j++){
        sum += arr2d[i][j];
    }
}

console.log(sum);