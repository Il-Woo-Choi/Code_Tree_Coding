const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < 5; i++){
    let arr = input[i].split(" ");
    let arr2 = [];
    for(let j = 0; j < 3; j++){
        arr2.push(arr[j].toUpperCase());
    }
    console.log(arr2[0], arr2[1], arr2[2])
}