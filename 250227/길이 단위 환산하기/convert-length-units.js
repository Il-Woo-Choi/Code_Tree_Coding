const ft = 30.48;
const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

console.log((N * ft).toFixed(1));