const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let prevMaxInx = n;
let str = "";

while(true){
    let maxIdx = 0;
    for(let i = 1; i < prevMaxInx; i++){
        if(arr[i] > arr[maxIdx]){
            maxIdx = i;
        }
    }

    str += `${maxIdx + 1} `;

    if(maxIdx === 0){
        break;
    }

    prevMaxInx = maxIdx;
}

console.log(str);