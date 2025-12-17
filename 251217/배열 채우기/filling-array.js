const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = [];
for(let elem of n){
    if(elem !== 0){
        a.push(elem);
    } else {
        break;
    }
}

let ans = "";

for(let elem of a.reverse()){
    ans += elem + " ";
}

console.log(ans);