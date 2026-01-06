const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 1; i <= n; i++){
    arr.push(input[i].trim().split(" "));
}

let ans = Array(2001).fill(0);
let count = 1000;

for(let i = 0; i < n; i++){
    let a = Number(arr[i][0]);
    let b = arr[i][1];
    
    if(b === "R"){
        for(let j = 0; j < a; j++){
            ans[count]++;
            count++;
        }
    } else {
        for(let j = 0; j < a; j++){
            count--;
            ans[count]++;
            
        }
    }
}

let finAnswer = 0;

for(let i = 0;  i < ans.length; i++){
    if(ans[i] >= 2){
        finAnswer++;
    }
}

console.log(finAnswer);