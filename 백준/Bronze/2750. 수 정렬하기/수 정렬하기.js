const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
  input
    .filter((v, i) => input.indexOf(v) === i)
    .sort((a, b) => a - b)
    .join("\n")
);