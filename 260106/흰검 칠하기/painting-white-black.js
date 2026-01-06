const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 1; i <= n; i++){
    arr.push(input[i].trim().split(" "));
}

let track = Array(200001).fill(0);
let cntB = Array(200001).fill(0);
let cntW = Array(200001).fill(0);
let start = 100000;
let white = 0;
let black = 0;
let gray = 0;

for(let i = 0; i < arr.length; i++){
    let a = Number(arr[i][0]);
    let b = arr[i][1];

    if(b === "L"){
        while(a > 0){
            track[start] = 1;
            cntW[start] += 1;
            a -= 1;

            if(a){
                start -= 1;
            }
        }
    } else {
        while (a > 0) {
            track[start] = 2;
            cntB[start] += 1;
            a -= 1;

            if(a){
                start += 1;
            }
        }
    }
}

for(let i = 0; i < 200001; i++){
    if(cntB[i] >= 2 && cntW[i] >= 2){
        gray += 1;
    } else if(track[i] === 1){
        white += 1;
    } else if(track[i] === 2){
        black+=1;
    }
}

console.log(`${white} ${black} ${gray}`);