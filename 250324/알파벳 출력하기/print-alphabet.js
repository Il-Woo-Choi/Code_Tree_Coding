const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let str = "";
let index = 'A'.charCodeAt();



for(let i = 0; i < N; i++){
    str = "";
    for(let j = 0; j < i + 1; j++){
        let x = String.fromCharCode(index);
        str += x;
        index++;
        if (index > 'Z'.charCodeAt()){
            index = 'A'.charCodeAt();
        }
    }

    console.log(str);
}