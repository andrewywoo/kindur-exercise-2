//read in file.
const fs = require("fs");
//call findpair.
const findpair = require("./findpair");

const firstArg = process.argv[2];
const secondArg = process.argv[3];

const items = fs.readFileSync(firstArg, "utf8").split("\n");
const prices = [];
items.forEach(i => {
  let s = i.split(", ");
  prices.push([s[0], parseInt(s[1])]);
});

findpair(prices, secondArg);
