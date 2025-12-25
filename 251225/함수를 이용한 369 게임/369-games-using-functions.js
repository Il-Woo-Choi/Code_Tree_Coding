const threeSixNine = (A, B) => {
    let count = 0;
    for(let i = A; i <= B; i++){
        let str = String(i);
        for(let j = 0; j < str.length; j++){
            if(str[j] === '3' || str[j] === '6' || str[j] === '9'){
                count++;
                break;
            }
        }
    }
    return count;
}

const threeMulti = (A, B) => {
    let count = 0;
    for(let i = A; i <= B; i++){
        if(i % 3 === 0){
            count++;
        }
    }

    return count;
}

const countOverlap = (A, B) => {
    let count = 0;
    for (let i = A; i <= B; i++) {
        let str = String(i);
        let has369 = false;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '3' || str[j] === '6' || str[j] === '9') {
                has369 = true;
                break;
            }
        }
        if (has369 && (i !== 0 && i % 3 === 0)) {
            count++;
        }
    }
    return count;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let ans = threeSixNine(A, B) + threeMulti(A, B) - countOverlap(A, B);

console.log(ans);