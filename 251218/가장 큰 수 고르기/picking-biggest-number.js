const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(e => Number(e));

let max = 0;

for(let elem of input){
    if(elem > max){
        max = elem;
    }
}

console.log(max);