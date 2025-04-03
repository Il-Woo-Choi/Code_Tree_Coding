const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ").map(Number);
let N = a[0];
let Q = a[1];
let arr = input[1].split(" ").map(Number);

for(let i = 0; i < Q; i++){
    let b = input[i+2].split(" ").map(Number);
    let idx = -1;
    let skrt = "";
    if(b[0] === 1){
        console.log(arr[b[1] - 1]);
    } else if(b[0] === 2){
        idx = arr.indexOf(b[1]);
            if(idx === -1){
                console.log(0);
            } else {
            console.log(idx + 1); // 1-based index
        }
        
    } else {
        for(let i = b[1]-1; i < b[2]; i++){
            skrt += arr[i] + " ";
        }
        console.log(skrt);
    }
}