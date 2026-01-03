const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr = [];

while(true){
    if(n < 2){
        arr.push(n);
        break;
    }

    arr.push(n%2);
    n = Math.floor(n / 2);
}

let ans = "";
for(let i = arr.length-1; i >= 0; i--){
    ans += arr[i];
}

console.log(ans);