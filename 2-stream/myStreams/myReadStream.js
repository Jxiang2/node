const { Readable } = require("stream");

// data
let src = ["lg", "zce", "syy"];

// custom Readable, extend Readable to get eventEmitters & eventListeners
class MyReadable extends Readable {
  constructor(src) {
    super();
    this.source = src;
  }

  _read() {
    let data = this.source.shift() || null;
    this.push(data); // generate & push data to the readable buffer
  }
}

// consume the custom Readable
let mr = new MyReadable(src);

// way1
mr.on("readable", () => {
  let data;
  while ((data = mr.read()) != null) {
    console.log(data.toString());
  }
});

// way2
mr.on("data", (chunk) => {
  console.log(chunk.toString());
});
