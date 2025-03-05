const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;

while (true) {
    let n = Number(input[index]);
    index++;
    if (n === 0) {
        break;
    }
    console.log(n);
}
