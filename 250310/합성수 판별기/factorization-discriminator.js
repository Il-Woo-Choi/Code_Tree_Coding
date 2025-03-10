const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let sat = false;


for(let i = 2; i < n; i++){
    if(n % i === 0){
        sat = true;
    }
}

if(sat === true) {
    console.log("C")
} else {
    console.log("N");
}