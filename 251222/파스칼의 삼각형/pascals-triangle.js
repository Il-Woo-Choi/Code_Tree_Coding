const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let pascals = Array(n).fill(0).map((_,i) => Array(i + 1).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            pascals[i][j] = 1;
        } else {
            pascals[i][j] = pascals[i - 1][j - 1] + pascals[i - 1][j];
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(pascals[i].join(" "));
}