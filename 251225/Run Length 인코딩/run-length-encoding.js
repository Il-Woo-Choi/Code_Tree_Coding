const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = input[0];
let count = 1;
let answer = "";
let index = 1;

for(let i = 1; i < input.length; i++){
    if(str === input[i]){
        str = input[i];
        count++;
        index++;
    } else {
        answer += str + count;
        str = input[index];
        count = 1;
        index++;
    }
}

answer += str + count;

console.log(answer.length);
console.log(answer);