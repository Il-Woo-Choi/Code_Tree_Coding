const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ").map(Number);
let n = a[0];
let m = a[1];

let arr1 = [];
let arr2 = [];

for(let i = 1; i <= n; i++){
    arr1.push(input[i].split(" ").map(Number));
}

for(let i = n + 1; i <= 2 * n; i++){
    arr2.push(input[i].split(" ").map(Number));
}

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < m; j++){
        if(arr1[i][j] === arr2[i][j]){
            str += 0 + " ";
        } else {
            str += 1 + " ";
        }
    }

    console.log(str);
}