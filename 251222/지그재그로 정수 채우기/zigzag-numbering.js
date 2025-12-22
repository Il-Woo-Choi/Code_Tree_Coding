const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));
let count = 0;

for(let i = 0; i < m; i++){
    if(i % 2 === 0){
        for(let j = 0; j < n; j++){
            arr2d[j][i] = count;
            count++;
        }
    } else {
        for(let j = n-1; j >= 0; j--){
            arr2d[j][i] = count;
            count++;
        }
    }
}

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < m; j++){
        str += arr2d[i][j] + " ";
    }
    console.log(str);
}