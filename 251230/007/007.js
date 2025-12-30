class Spy {
    constructor(secret_code, meeting_point, time){
        this.secret_code = secret_code;
        this.meeting_point = meeting_point;
        this.time = time;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("/n");

const [s_code, m_point, time] = input[0].split(" ");

const s = new Spy(s_code, m_point, parseInt(time));

console.log(`secret code : ${s.secret_code}`);
console.log(`meeting point : ${s.meeting_point}`);
console.log(`time : ${s.time}`);