const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";

for(let i = N-1; i >= 0; i--){
    str = "";
    for(let j = 0; j < N-i-1; j++){
        str += "  ";
    }
    for(let j = 0; j < 2*(i+1)-1; j++){
        str += "* ";
    }

    console.log(str);
}
