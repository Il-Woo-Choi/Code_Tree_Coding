const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let N = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);
let count = 0;

for(let i = 0; i < A.length; i++){
    if(A[i] === B[0]){
        for(let j = 0; j < B.length; j++){
            if(A[i+j] === B[j]){
                count++;
            }
        }

        if(count !== B.length){
            continue;
        } else {
            break;
        }
    }
}

if(count === B.length){
    console.log("Yes");
} else {
    console.log("No");
}