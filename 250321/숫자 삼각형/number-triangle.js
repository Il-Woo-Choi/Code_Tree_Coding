const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";
let cnt = 1;

for(let i = 0; i < N; i++){
    str = "";
    cnt = 1;
    for(let j = 0; j <= i; j++){
        str += cnt + " ";
        cnt++;
    }

    console.log(str);
}