const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let M = Number(input[0]);

for(let i = 0; i < M; i++){
    let N = Number(input[i+1]);
    let cnt = 0;

    while(N !== 1){
        if(N % 2 === 1){
            N = (N * 3 + 1);
            cnt++;
        } else {
            N /= 2;
            cnt++;
        }
    }

    console.log(cnt);
}