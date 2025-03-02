const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let result = "";

for(i=1; i<=N; i++){
    if(parseInt(i/10) == 0 && i <= 9){
        if(i % 3 == 0){
            result += 0 + " ";
        } else{
            result += i + " ";
        }
    } else if((parseInt(i/10)) % 3 == 1){
        if(i % 3 == 1 && i != 10){
            result += 0 + " ";
        } else {
            result += i + " ";
        }
    } else if((parseInt(i/10)) % 3 == 2){
        if(i % 3 == 2){
            result += 0 + " ";
        } else {
            result += i + " ";
        }
    } else if((parseInt(i/10)) % 3 == 0 && i>9){
        result += 0 + " ";
    }
}

console.log(result);