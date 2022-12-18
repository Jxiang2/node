const { Writable } = require("stream");

class MyWritable extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, done) {
    process.stdout.write(chunk.toString() + "<---");
    // make sure the previous line is completed
    process.nextTick(done);
  }
}

let mr = new MyWritable();
mr.write("hello node", "utf-8", () => {
  console.log("end");
});
