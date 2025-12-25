const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

const func = (e) => {
    let sum = 0;
    for(let i = 1; i <= e; i++){
        sum += i;
    }
    
    return parseInt(sum / 10);
}

console.log(func(n));