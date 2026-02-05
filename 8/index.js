const http = require("http");
const fs = require("fs");

fs.readFile("./node.html", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data.toString());
  }
});

const server = http.createServer((req, res) => {
  if (req.url == "/file" && req.method == "GET") {
    res.writeHead(201, { "content-type": "html" });
    res.end(filedata);
  }
});

server.listen(5555);
