
class User {
    constructor(id = "codetree", level = 10) {
        this.id = id;
        this.level = level;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let u_id = input[0];
let u_level = Number(input[1]);

const user = new User();
console.log(`user ${user.id} lv ${user.level}`);
user.id = u_id;
user.level = u_level;
console.log(`user ${user.id} lv ${user.level}`);
