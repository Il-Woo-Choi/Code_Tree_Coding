const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let str = "";

for(let i = 1; i <= 9; i++){
    str = ""; 
    for(let j = parseInt(B/A); j >= 1; j--){
        str += `${j*2} * ${i} = ${j*2 * i}`;
        if(j === 1){
            str += " ";
        } else {
            str += " / ";
        }
    }

    console.log(str);
}