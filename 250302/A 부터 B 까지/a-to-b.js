const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = A;

while(A<B){
    if(A % 2 == 1){
        A *= 2;
    } else {
        A += 3;
    }
    if(A>B){
        result += "";
    } else {
        result += " " + A;
    }

}

console.log(result);