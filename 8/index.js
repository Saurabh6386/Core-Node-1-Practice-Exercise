const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/file" && req.method == "GET") {
    fs.readFile("./node.html", (err, data) => {
      if (err) {
        res.writeHead(501);
        return res.end("Error Loading File");
      } else {
        res.writeHead(201, { "Content-Type": "text/html" });
        return res.end(data);
      }
    });
  } else if (req.url == "/stream" && req.method == "GET") {
    const data = fs.createReadStream("./node.html");
    data.pipe(res); 
  } else {
    res.writeHead(404);
    res.end("File not found");
  }
});

server.listen(5555);
