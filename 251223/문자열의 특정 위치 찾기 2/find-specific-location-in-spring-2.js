const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i][2] == input || arr[i][3] == input){
        count++;
        console.log(arr[i]);
    }
}

console.log(count);