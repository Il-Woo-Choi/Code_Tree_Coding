const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);

if(n % 2 == 1){
    if(n < 8){
        console.log("31");
    } else{
        console.log("30");
    }
} else if(n % 2 == 0){
    if(n < 8){
        if(n == 2){
            console.log("28");
        } else{
            console.log("30");
        }
    } else{
        console.log("31");
    }
}