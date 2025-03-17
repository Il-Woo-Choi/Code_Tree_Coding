const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

for(let i = 0; i < N*2+1; i++){
    str = "";
    for(let j = 0; j < N*2+1; j++){
        if(i % 2 === 0 || j % 2 === 0){
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}