const fs = require('fs');

const bufferArr = [];

const rs = fs.createReadStream("testInput.txt");
const ws = fs.createWriteStream("testOutput.txt");

rs.pipe(ws)
  .on("data", (chunk) => {
    console.log("processing data ...");
    bufferArr.push(chunk);
  })
  .on("end", () => bufferArr.toString());

