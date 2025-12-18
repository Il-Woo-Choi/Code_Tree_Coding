const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let minVal = Number.MAX_SAFE_INTEGER;
let maxVal = Number.MIN_SAFE_INTEGER;

for(let elem of input){
    if(elem == 999 || elem == -999){
        break;
    } else {
        if(elem < minVal){
            minVal = elem;
        }
        if(elem > maxVal){
            maxVal = elem;
        }
    }
}

console.log(maxVal, minVal);