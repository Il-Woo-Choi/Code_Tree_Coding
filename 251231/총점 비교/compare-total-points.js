class Student {
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let student = [];

for(let i = 1; i <= n; i++){
    let [s_name, s_kor, s_eng, s_math] = input[i].split(" ");
    student.push(new Student(s_name, Number(s_kor), Number(s_eng), Number(s_math)));
}

student.sort((a, b) => {
    return (a.kor+a.eng+a.math) - (b.kor+b.eng+b.math)
})

for(let i = 0; i < student.length; i++){
    console.log(`${student[i].name} ${student[i].kor} ${student[i].eng} ${student[i].math}`);
}