const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";

for(let i = N - 1; i  >= 0; i--){
    str = "";
    for(let j = 0; j <= i; j++){
        str += "* ";
    }
    console.log(str);
}

for(let i = 1; i < N; i++){
    str = "";
    for(let j = 0; j <= i; j++){
        str += "* ";
    }
    console.log(str);
}