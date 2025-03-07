const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let cnt = 0;
let sum = 0;
let N = Number(input);

while(true){
    cnt++;


    if(N >= 1000){
        break;
    }
    if(N % 2 == 0){
        N += (N * 3) + 1;
    } else {
        N += (N * 2) + 2;
    }


}

console.log(cnt);