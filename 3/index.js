console.log("Welcome to Nodejs");

const os = require("os");

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

const { readFile, unlink } = require("fs");

const buff = Buffer.alloc(12);
buff.write("abcdefghijklmnopqrstuvwxyz");
const buffi = buff.toString();

console.log(buffi);
