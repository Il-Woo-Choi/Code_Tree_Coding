const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let A = Number(input);
let result = "";

for(let i = 1; i <= A; i++){
    if(i % 2 == 0 && i % 4 != 0){
        continue;
    } else if(parseInt(i/8) % 2 == 0){
        continue;
    } else if((i % 7) < 4){
        continue;
    } else {
        result += i + (" ");
    }
}

console.log(result);