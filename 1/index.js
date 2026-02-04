const fs = require("fs");

const data = fs.readFileSync("./content.md", "utf8");
console.log(data, "a");

fs.readFile("./content.md", "utf8", (err, data) => {
  if (err) {
    console.error("Something went wrong!");
    return;
  }
  console.log(data);
});

console.log("--- End of Script ---");

const buff1 = Buffer.alloc(20);
buff1.write("Welcome to buffer");

console.log(buff1.toString());
