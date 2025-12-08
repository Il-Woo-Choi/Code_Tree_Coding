const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

console.log(a.toFixed(2));