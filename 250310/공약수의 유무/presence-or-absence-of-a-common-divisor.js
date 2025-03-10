const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let sat = false;

for(let i = A; i <= B; i++){
    if(1920 % i == 0 && 2880 % i == 0){
        sat = true;
    }
}

if(sat === true){
    console.log(1);
} else {
    console.log(0);
}