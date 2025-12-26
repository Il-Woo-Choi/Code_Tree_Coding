const func = (a) => {
    let ans = false;
    for(let i = 0; i < a.length - 1; i++){
        if(a[i] !== a[i+1]){
            ans = true;
            break;
        }
    }

    return ans;
}

const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if(func(a) === true){
    console.log("Yes");
} else {
    console.log("No");
}