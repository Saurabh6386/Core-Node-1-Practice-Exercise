const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);

  res.write("Hello from node server http");
  res.end();
});

server.listen(3000, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server is running on 3000");
  }
});
