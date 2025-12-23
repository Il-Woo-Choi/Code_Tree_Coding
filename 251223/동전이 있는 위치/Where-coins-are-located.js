const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ").map(Number);
let n = a[0];
let m = a[1];
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for(let i = 0; i < m; i++){
    let b = input[i+1].split(" ").map(Number);
    arr2d[b[0]-1][b[1]-1] = 1;
}

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < n; j++){
        str += arr2d[i][j] + " ";
    }
    console.log(str);
}