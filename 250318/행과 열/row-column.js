const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let str = "";

for(let i = 0; i < A; i++){
    str = "";
    for(let j = 0; j < B; j++){
        str += (j + 1)*(i + 1)+ " ";
    }
    console.log(str);
}