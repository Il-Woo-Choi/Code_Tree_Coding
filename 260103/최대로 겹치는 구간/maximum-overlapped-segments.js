const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_R = 200;
const OFFSET = 100;


let n = Number(input[0]);
let segments = [];
for(let i = 1; i <= n; i++){
    segments.push(input[i].split(" ").map(Number));
}
let arr = Array(MAX_R+1).fill(0);

for(let i = 0; i < segments.length; i++){
    let [x1, x2] = segments[i];

    x1 += OFFSET;
    x2 += OFFSET;

    for(let j = x1; j < x2; j++){
        arr[j] += 1;
    }
}

let max = Math.max(...arr);
console.log(max);