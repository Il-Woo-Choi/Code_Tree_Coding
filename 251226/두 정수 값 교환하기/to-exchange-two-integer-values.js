const swap = (a, b) => {
    [a, b] = [b, a];
    return [a, b];
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

console.log(swap(n, m).join(" "));