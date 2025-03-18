const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let str = "";

for(let i = 0; i < n; i++){
    str = "";
    for(let j = 0; j < n; j++){
        str += j+1;
    }
    console.log(str);
}