const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let str = "";
let index = 'A'.charCodeAt();

for(let i = 0; i < n; i++){
    str = "";
    for(let j = 0; j < n; j++){
        str += String.fromCharCode(index);
        index++;
    }
    console.log(str);
}