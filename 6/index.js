const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(201, "Saurabh rajput");

  if (req.method == "GET") {
    res.write("Get");
  }
  if (req.method == "POST") {
    res.write("Post");
  }
  if (req.method == "PUT") {
    res.write("Put");
  }
  if (req.method == "DELETE") {
    res.write("Delete");
  }
  res.end();
});

server.listen(4444);
