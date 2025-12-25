
const weatherExist = (Y) => {
    let yunYear = false;
    if(yunYear % 4 === 0 && yunYear % 100 === 0 && yunYear % 400 === 0){
        yunYear = true;
    } else if(yunYear % 4 === 0 && yunYear % 100 !== 0){
        yunYear = true;
    } else if(yunYear % 4 === 0){
        yunYear = true;
    }

    return yunYear;
}

const whatsTheWeather = (Y, M, D) => {
    if(M > 12 || M < 1 || D > 31 || D < 1){
        return -1;
    } else if(M % 2 === 0 && D > 30){
        return -1;
    } else if(M % 2 === 1 && D > 31){
        return -1;
    } else if(weatherExist(Y) === false && M === 2 && D === 29){
        return -1;
    } else if(M >= 3 && M < 6){
        return "Spring";
    } else if(M >= 6 && M < 9){
        return "Summer";
    } else if(M >= 9 && M < 12){
        return "Fall";
    } else {
        return "Winter";
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let Y = Number(input[0]);
let M = Number(input[1]);
let D = Number(input[2]);

let ans = whatsTheWeather(Y, M, D);
console.log(ans);