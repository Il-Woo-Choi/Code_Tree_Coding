const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let N = Number(input);
let str = "";
let cnt = 1;

for(let i = 0; i < N; i++){
    str = "";
    for(let j = 0; j < N; j++){
        str += cnt + " ";
        cnt++;
    }

    console.log(str);
}