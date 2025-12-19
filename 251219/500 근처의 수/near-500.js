const fs = require("fs");
// 입력을 배열로 받음
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < 10; i++){
    let n = input[i];
    if(n < 500){
        if(n > max){
            max = n;
        }
    }

    if(n > 500){
        if(n < min){
            min = n;
        }
    }
}

console.log(max, min);