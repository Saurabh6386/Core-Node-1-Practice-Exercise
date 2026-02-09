const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url);

  // HANDLE CSS FILES
  if (req.url.endsWith(".css")) {
    const cssPath = path.join(__dirname, "../../", req.url);

    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS Not Found");
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else if (req.url.endsWith(".jpg")) {
    const imgPath = path.join(__dirname, "../../", req.url);

    fs.readFile(imgPath, (err, data) => {
      if (err) return console.log(err);

      res.writeHead(200, { "content-type": "image/jpg" });
      res.end(data);
    });
  }

  // HOME PAGE
  else if (req.url === "/") {
    fs.readFile("../../index.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // ABOUT PAGE
  else if (req.url === "/about") {
    fs.readFile("../../about.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // NOT FOUND
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(5000);
