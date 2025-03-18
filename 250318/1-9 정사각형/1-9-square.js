const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input);
let str = "";
let cnt = 1;

for(let i = 0; i < n; i++){
    str = "";
    for(let j = 0; j < n; j++){
        str += cnt;
        cnt++;
        if(cnt >= 10){
            cnt = 1;
        }
    }

    console.log(str);
}