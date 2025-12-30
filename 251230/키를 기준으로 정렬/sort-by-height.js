class Personal_info {
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let person = [];

for(let i = 0; i < n; i++){
    const [p_name, p_height, p_weight] = input[i+1].split(" ");
    person.push(new Personal_info(p_name, Number(p_height), Number(p_weight)));
}

person.sort((a, b) => a.height - b.height);

for(let i = 0; i < n; i++){
    console.log(`${person[i].name} ${person[i].height} ${person[i].weight}`);
}