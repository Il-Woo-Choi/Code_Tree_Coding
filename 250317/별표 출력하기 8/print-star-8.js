const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";

for(let i = 1; i <= N; i++){
    str = "";
    if(i % 2 === 1){
        str += "* ";
        console.log(str);
    } else {
        for(let j = 1; j <= i; j++){
            str += "* ";
        }
        console.log(str);
    }
}