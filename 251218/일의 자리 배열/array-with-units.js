const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [input[0], input[1]];
let str = `${input[0]} ${input[1] }`;

for(let i = 0; i < 8; i++){
    if(arr[i] + arr[i+1] >= 10){
        arr[i+2] = arr[i] + arr[i+1] - 10;
    } else {
        arr[i+2] = arr[i] + arr[i+1];
    }
    str += ` ${arr[i+2]}`;
}

console.log(str);