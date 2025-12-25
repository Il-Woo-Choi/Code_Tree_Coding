const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let str = input[1].split(" ").map(Number);
let count = 0;

str = str.join("");

for(let i = 0; i < (str.length/5).toFixed(0)+1; i++){
    let answer = "";
    for(let j = 0; j < 5; j++){
        if(count === str.length){
            break;
        } else {
            answer += str[count];
            count++;
        }

    }
    console.log(answer);
}
