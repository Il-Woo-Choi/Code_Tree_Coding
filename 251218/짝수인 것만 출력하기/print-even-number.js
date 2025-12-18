const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split(" ").map(Number);
let str = "";
let arr = [];

for(let i = 0; i < n; i++){
    if(a[i] % 2 === 0){
        arr.push(a[i]);
    }
}

for(let elem of arr){
    str += elem + " ";
}

console.log(str);