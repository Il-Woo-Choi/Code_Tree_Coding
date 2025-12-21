const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let ans = Array(3).fill(0).map(() => Array(3).fill(0));

for(let i = 0; i < 3; i++){
    let firstArr = input[i].split(" ").map(Number);
    let secondArr = input[i+4].split(" ").map(Number);
    let str = "";
    for(let j = 0; j < 3; j++){
        ans[i][j] = firstArr[j] * secondArr[j];
        str += ans[i][j] + " ";
    }
    console.log(str);
}