const fs = require("fs");
const path = require("path");

const bufferArr = [];

const rs = fs.createReadStream(
  path.join(__dirname, "..", "io", "testInput.txt"),
);
const ws = fs.createWriteStream(
  path.join(__dirname, "..", "io", "testOutput.txt"),
);

rs.pipe(ws)
  .on("data", (chunk) => {
    console.log("processing data ...");
    bufferArr.push(chunk);
  })
  .on("end", () => bufferArr.toString());
