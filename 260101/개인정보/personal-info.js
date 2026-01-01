
class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = [];

for(let i = 0; i < 5; i++){
    let [p_name, p_height, p_weight] = input[i].split(" ");
    arr.push(new Person(p_name, Number(p_height), Number(p_weight)));
}

arr.sort((a, b) => {
    if(a.name < b.name) {
        return -1;
    }

    if(a.name > b.name) {
        return 1;
    }

    return 0;
})

console.log("name");
for(let i = 0; i < 5; i++){
    console.log(`${arr[i].name} ${arr[i].height} ${arr[i].weight}`);
}

arr.sort((a, b) => {
    if(a.height > b.height) {
        return -1;
    }

    if(a.height < b.height) {
        return 1;
    }

    return 0;
})

console.log("\nheight");
for(let i = 0; i < 5; i++){
    console.log(`${arr[i].name} ${arr[i].height} ${arr[i].weight}`);
}