const isLeapYear = (Y) => {
    if (Y % 400 === 0) return true;
    if (Y % 100 === 0) return false;
    if (Y % 4 === 0) return true;
    return false;
};

const canExist = (Y, M, D) => {
    if (M < 1 || M > 12) return false;

    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(Y)) {
        daysInMonth[2] = 29;
    }

    return D >= 1 && D <= daysInMonth[M];
};

const getSeason = (M) => {
    if (M >= 3 && M <= 5) return "Spring";
    if (M >= 6 && M <= 8) return "Summer";
    if (M >= 9 && M <= 11) return "Fall";
    return "Winter"; 
};

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let Y = Number(input[0]);
let M = Number(input[1]);
let D = Number(input[2]);

if (canExist(Y, M, D)) {
    console.log(getSeason(M));
} else {
    console.log(-1);
}