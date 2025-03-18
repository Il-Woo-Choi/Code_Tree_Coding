const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let str = "";

for(let i = 1; i <= n; i++){
    str = "";
    for(let j = 1; j <= n; j++){
        str += `${i} * ${j} = ${i * j}`;
        if(j === n){
            str += " ";
        } else {
            str += ", ";
        }
    }

    console.log(str);
}