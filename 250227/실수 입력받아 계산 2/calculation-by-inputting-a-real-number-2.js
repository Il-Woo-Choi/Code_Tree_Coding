const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());

let result = a+1.5;
console.log(result.toFixed(2));