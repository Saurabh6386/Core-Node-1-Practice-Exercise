const http = require("http");
const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   console.log(res);
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(201, { "content-type": "text/plain" });
//   res.end("My first server in NodeJS");
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(201, { "content-type": "text/plain" });
//   res.end(req.headers["user-agent"]);
// });

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.writeHead(201, { "content-type": "text/plain" });
//   res.end(`${req.url} ${req.method}`);
// });

// const server = http.createServer((req, res) => {
//   let str = JSON.stringify(req.headers);

//   res.writeHead(201, { "content-type": "text/plain" });
//   res.end(str);
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(202);
//   res.end();
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("school", "altcampus");
//   res.end(`<h3>Welcome to altcampus</h3>`);
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(201, { "content-type": "text/html" });
//   res.end(`<h1>HI<h1>`);
// });

// const server = http.createServer((req, res) => {
//   res.writeHead(201, { "content-type": "application/json" });
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// });

// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   res.writeHead(201, { "content-type": "text/html" });
//   res.end(`<h2>posted for the first time<h2>`);
// });

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(201, { "content-type": "text/plain" });
//     res.end("Saurabh Rajput");
//   } else if (req.method === "GET" && req.url === "/about") {
//     res.writeHead(201, { "content-type": "text/html" });
//     res.end(`<h2>Saurabh Rajput<h2>`);
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("404");
//   }
// });

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.writeHead(201, { "content-type": "text/html" });
//     res.end(`
//       <form>
//       Name
//       <input type="text" name="Name">
//       Email
//       <input type="email" name="email">
//       <form>
//       `);
//   } else if (req.method === "POST") {
//     res.writeHead(201, { "content-type": "text/plain" });
//     res.end("Posted for the second time'");
//   }
// });

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);

  console.log(parsedUrl.pathname);
  console.log(req.url);
  let email = parsedUrl.query.email;

  res.writeHead(201, { "content-type": "application/json" });
  res.end(JSON.stringify(email));
});

server.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 5000");
  }
});
