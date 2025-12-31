class Student {
    constructor(height, weight, number){
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let student = [];

for(let i = 1; i <= n; i++){
    let [s_height, s_weight] = input[i].split(" ");
    student.push(new Student(Number(s_height), Number(s_weight), i));
}

student.sort((a, b) => {
    if(a.height !== b.height){
        return b.height - a.height;
    }

    if(a.weight !== b.weight){
        return b.weight - a.weight;
    }

    return a.number - b.number;
})

for(let i = 0; i < n; i++){
    console.log(`${student[i].height} ${student[i].weight} ${student[i].number}`);
}