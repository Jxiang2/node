const fs = require('fs');

let rs = fs.createReadStream("testR.txt", {
  flag: "r",
  encoding: null,
  fd: null,
  mode: 438,
  autpClose: true,
  start: 0, // start point of resource
  end: 9, // end point of resource
  highWaterMark: 4 // a buffer stores 4 bytes, push() 4 bytes adter exthausted
});

// // way 1
// rs.on("data", (chunk) => {
//   console.log(chunk.toString());
//   // pasue the stream
//   rs.pause();
//   // resume the stream after 1 sec
//   setTimeout(() => rs.resume(), 1000);
// });

// way 2 *
let bufferArr = [];

rs.on("readable", () => {
  // buffer is ready to be read
  let data;
  while ((data = rs.read(1)) !== null) { // each time read 1 byte from buffer
    bufferArr.push(data);
    console.log(data.toString(), "\n------", rs._readableState.length);
  }
});

// freqently used eventListeners
rs.on("open", (fd) => console.log(fd, "file opened"));

rs.on("close", () => console.log("file closed"));

rs.on("end", () => {
  console.log(Buffer.concat(bufferArr).toString());
  console.log("data are completedly consumed");
});

rs.on("error", (err) => console.log(err.message));


