const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";
let index = 'A'.charCodeAt();

for(let i = 0; i < N; i++){
    str = "";
    for(let j = 0; j < i; j++){
        str += "  ";
    }

    for(let j = N - i; j > 0; j--){
        str += String.fromCharCode(index) + " ";
        index++;
        if(index > 'Z'.charCodeAt()){
            index = 'A'.charCodeAt();
        }
    }

    console.log(str);
}