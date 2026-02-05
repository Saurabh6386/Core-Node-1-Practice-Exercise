const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello From Node Server");
  res.end();
});

server.listen(3000);
