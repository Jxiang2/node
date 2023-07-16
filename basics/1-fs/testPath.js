const path = require("path");

// simply join arguments
const p1 = path.join("a", "b");
console.log(p1); // a/b

// attach absolute path to joined arguments
const p2 = path.resolve("a", "b");
console.log(p2); // /Users/henryxiang/Documents/personal/node/1-fs/a/b

// using __dirname, the results will be the same
const p3 = path.join(__dirname, "a", "b");
console.log(p3);

const p4 = path.resolve(__dirname, "a", "b");
console.log(p4);
