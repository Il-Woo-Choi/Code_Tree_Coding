const func = (n, m) => {
    return n.indexOf(m);
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let m = input[1];

console.log(func(n, m));
