const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let carPrice = input[1].split(" ").map(Number);

let benefit = 0;

for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
        if(carPrice[i] < carPrice[j] && benefit < carPrice[j] - carPrice[i]){
            benefit = carPrice[j] - carPrice[i];
        }
    }
}

console.log(benefit);