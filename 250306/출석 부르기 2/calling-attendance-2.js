const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;

while(true){
    let N = Number(input[index]);
    index++;


    if(N == 1){
        console.log("John");
    } else if(N == 2){
        console.log("Tom");
    } else if(N == 3){
        console.log("Paul");
    } else if(N == 4){
        console.log("Sam");
    } else {
        console.log("Vacancy");
        break;
    }
}