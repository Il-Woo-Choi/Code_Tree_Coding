const func = (e) => {
    for(let i = 0; i < e.length; i++){
        if(e[i] % 2 === 0){
            e[i] = e[i]/2;
        }
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split(" ").map(Number);

func(a);
let str = "";
for(let i = 0; i < a.length; i++){
    str += a[i] + " ";
}

console.log(str);