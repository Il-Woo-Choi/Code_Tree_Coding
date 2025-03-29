const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str = "";
for(let i = 9; i >= 0; i--){
    str +=input[i];
}

console.log(str);