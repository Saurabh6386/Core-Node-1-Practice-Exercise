const url = require("url");

const parseUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true,
);

// console.log(parseUrl);
console.log(parseUrl.pathname);
console.log(parseUrl.query);
console.log(parseUrl.host);
console.log(parseUrl.protocol);
