
class Agent {
    constructor(code_name, score){
        this.code_name = code_name;
        this.score = score;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n_agent = [];

for(let i = 0; i < input.length; i++){
    const [code_name, score] = input[i].split(" ");
    n_agent.push(new Agent(code_name, Number(score)));
}

let min_idx = 0;
for(let i = 1; i < 5; i++){
    if(n_agent[min_idx].score > n_agent[i].score){
        min_idx = i;
    }
}

console.log(n_agent[min_idx].code_name, n_agent[min_idx].score);