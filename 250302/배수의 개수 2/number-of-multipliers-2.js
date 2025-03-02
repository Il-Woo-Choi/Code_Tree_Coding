const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;

for(let i=0; i<10; i++){
    let N = Number(input[i]);
    if(N % 2 == 1){
        count++;
    }
}

console.log(count);