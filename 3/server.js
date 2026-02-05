const { parse } = require("url");

const parsedUrl = parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
);

console.log(parsedUrl);
