const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let exist1 = false;
let exist2 = false;

for(let i = 0; i < input.length - 1; i++){
    if(input.slice(i, i+2) === "ee"){
        exist1 = true;
    }
    if(input.slice(i, i+2) === "ab"){
        exist2 = true;
    }
}

let ans = "";

if(exist1 == true){
    ans += "Yes ";
} else if(exist1 == false){
    ans += "No ";
}

if(exist2 == true){
    ans += "Yes ";
} else if(exist2 == false){
    ans += "No ";
}

console.log(ans);