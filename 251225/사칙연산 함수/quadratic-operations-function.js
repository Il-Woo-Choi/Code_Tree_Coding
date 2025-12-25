const add = (a, b) => {
    return a+b;
}

const minus = (a, b) => {
    return a-b;
}

const multi = (a, b) => {
    return a*b;
}

const divide = (a, b) => {
    return parseInt(a/b);
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let o = input[1];
let b = Number(input[2]);

if(o == "+"){
    console.log(`${a} + ${b} = ${add(a, b)}`);
} else if(o == "-"){
    console.log(`${a} - ${b} = ${minus(a, b)}`);
} else if(o == "*"){
    console.log(`${a} * ${b} = ${multi(a, b)}`);
} else if(o == "/"){
    console.log(`${a} / ${b} = ${divide(a, b)}`);
} else {
    console.log("False");
}