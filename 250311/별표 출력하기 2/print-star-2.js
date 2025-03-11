const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";

for(let i = 0; i < N; i++){
    str = "";
    for(let j = N; j > i; j--){
        str += "* ";
    }

    console.log(str);
}