const fs = require("fs");

const ws = fs.createWriteStream(
  path.join(__dirname, "..", "files", "testW.txt"),
  {
    flags: "w",
    mode: 438,
    fd: null,
    encoding: "utf-8",
    start: 0, // start point of resource
    highWaterMark: 3, // a buffer stores 3 bytes, push() 3 bytes adter exthausted
  },
);

// ws.write(), ws.end() is synchronous on writing sequence
// ws.write() only accepts string or buffer

const flag1 = ws.write("ab", () => {
  // 2 bytes
  console.log("write is completed 1");
});
console.log(flag1); // true

const flag2 = ws.write(Buffer.from("abcdef"), () => {
  // 3 bytes
  console.log("write is completed 2");
});
console.log(flag2); // false

ws.end("writing ends"); // make sure to end after finish writing, error if write after end

// freqently used eventListeners
ws.on("open", (fd) => console.log(fd, "file opened"));

ws.on("close", () => console.log("file closed"));

ws.on("error", (err) => console.log(err.message));
