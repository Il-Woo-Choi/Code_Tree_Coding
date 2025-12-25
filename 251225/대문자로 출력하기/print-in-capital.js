const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let str = "";

for(elem of input){
    if(elem >= 'a' && elem <= 'z' || elem >= 'A' && elem <= 'Z'){
        str += elem;
    }
}

console.log(str.toUpperCase());