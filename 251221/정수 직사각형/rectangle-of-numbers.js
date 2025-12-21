const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let n = input[0];
let m = input[1];
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0))
let first = 1;

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < m; j++){
        str += first + " ";
        first++;
    }
    console.log(str);
}