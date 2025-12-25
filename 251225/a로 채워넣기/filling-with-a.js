const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");


input[1] = "a";
input[input.length-2] = "a";

input = input.join("");
console.log(input);