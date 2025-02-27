const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

if(N < 0){
    console.log(N);
    console.log("minus");
} else{
    console.log(N);
}