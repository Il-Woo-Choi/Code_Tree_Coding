const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let segments = [];
for(let i = 1; i <= n; i++){
    segments.push(input[i].trim().split(" ").map(Number));
}

let blocks = Array(101).fill(0);

for(let i = 0; i < n; i++){
    let [a, b] = segments[i];
    for(let i = a; i <= b; i++){
        blocks[i] += 1;
    }
}

let max = Math.max(...blocks);
console.log(max);