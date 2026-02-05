const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.writeHead(201, { "content-type": "text/plain" });
    res.end("Welcome to homepage");
  } else if (req.url == "/about" && req.method == "GET") {
    res.writeHead(201, { "content-type": "text/html" });
    res.end(`<h2>Hi</h2>`);
  } else if (req.url == "/about" && req.method == "POST") {
    res.writeHead(201, { "content-type": "application/json" });
    res.end(`{message: this is a post request}`);
  } else {
    res.writeHead(403, { "content-type": "application/ json" });
    res.end("Does't Match any request");
  }
});

server.listen(5000);
