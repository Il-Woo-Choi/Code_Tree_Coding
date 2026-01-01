class Point {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 1; i <= n; i++){
    let [x_point, y_point] = input[i].split(" ");
    arr.push(new Point(Number(x_point), Number(y_point), Number(i)));
}

arr.sort((a, b) => {
    if(Math.abs(a.x+a.y) < Math.abs(b.x+b.y)){
        return -1;
    }

    if(Math.abs(a.x+a.y) > Math.abs(b.x+b.y)){
        return 1;
    }

    return a.index - b.index;
})

for(let i = 0; i < n; i++){
    console.log(`${arr[i].index}`);
}