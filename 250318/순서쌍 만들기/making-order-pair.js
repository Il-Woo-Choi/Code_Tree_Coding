const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";

for(let i = N; i > 0; i--){
    str = "";
    for(let j = N; j > 0; j--){
        str += `(${i},${j}) `;
    }
    console.log(str);
}