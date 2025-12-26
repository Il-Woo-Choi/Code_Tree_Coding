const func = (n) => {
    if(n === 0){
        return;
    }
    console.log("HelloWorld");
    func(n-1);
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

func(n);