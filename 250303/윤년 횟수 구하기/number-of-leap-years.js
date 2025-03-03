const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let count = 0;

for(i = 1; i <= N; i++){
    if(i % 4 === 0){
        if(i % 100 === 0 && i % 400 !== 0){
            
        } else{
            count += 1;
        }
    }
}

console.log(count);