const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let countT = 0;
let countF = 0;

for(i=0; i<10; i++){
    let N = Number(input[i]);
    if(N % 3 == 0){
        countT++;
    }

    if(N % 5 == 0){
        countF++;
    }
}

console.log(countT, countF);
