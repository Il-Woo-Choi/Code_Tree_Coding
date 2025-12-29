const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ");

let n = Number(a[0]);
let k = Number(a[1]);
let t = a[2];


let arr = [];

for(let i = 0; i < n; i++){
    let count = 0;
    for(let j = 0; j < t.length; j++){
        if(input[i+1][j] === t[j]){
            count++;
        }
    }

    if(count === t.length){
        arr.push(input[i+1]);
    }
}

arr.sort();

console.log(arr[k-1]);