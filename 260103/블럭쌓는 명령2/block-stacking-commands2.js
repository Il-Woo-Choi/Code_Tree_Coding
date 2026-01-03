const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let max = Number.MIN_SAFE_INTEGER;

for(let i = 0; i < K; i++){
    let [a, b] = input[i+1].split(" ").map(Number);
    let arr = Array(K).fill(0);
    let count = 0;
    for(let j = a; j <= b; j++){
        arr[j-1] = 1;
        count++;
    }
    if(count > max){
        max = count;
    }

}

console.log(max);
