class Student {
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = Number(kor);
        this.eng = Number(eng);
        this.math = Number(math);
    }
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 0; i < n; i++){
    let [p_name, p_kor, p_eng, p_math] = input[i+1].split(" ");
    arr.push(new Student(p_name, p_kor, p_eng, p_math));
}

arr.sort((a, b) => {
    if(a.kor !== b.kor){
        return b.kor - a.kor;
    }

    if(a.eng !== b.eng){
        return b.eng - a.eng;
    }

    return b.math -  a.math;
})

for(let i = 0; i < n; i++){
    console.log(`${arr[i].name} ${arr[i].kor} ${arr[i].eng} ${arr[i].math}`);
}
