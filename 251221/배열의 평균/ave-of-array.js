const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str1 = "";
let str2 = "";

for(let i = 0; i < input.length; i++){
    let widthAvg = 0;
    let widthSum = 0;
    let arr1 = input[i].split(" ").map(Number);
    for(let j = 0; j < arr1.length; j++){
        widthSum += arr1[j];
    }
    widthAvg = (widthSum / arr1.length).toFixed(1);
    str1 += widthAvg + " ";
}

for(let i = 0; i < 4; i++){
    let heightSum = 0;
    let heightAvg = 0;
    let arr2 = input[0].split(" ").map(Number);
    let arr3 = input[1].split(" ").map(Number);
    heightSum += arr2[i] + arr3[i];
    heightAvg = (heightSum / 2).toFixed(1);
    str2 += heightAvg + " ";
}

let allSum = 0;
let allAvg = 0;

for(let i = 0; i < input.length; i++){
    let arr4 = input[i].split(" ").map(Number);
    for(let j = 0; j < arr4.length; j++){
        allSum += arr4[j];
    }
}
allAvg = (allSum / 8).toFixed(1);

console.log(str1);
console.log(str2);
console.log(allAvg);