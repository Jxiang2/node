/**
 * Buffer split method implementation
 * seperate the buffer based on a seperator
 */

Buffer.prototype.split = function (sep = " ") {
  let sepLen = Buffer.from(sep).length;
  let result = [];
  let start = 0;
  let offset = 0;

  while (this.indexOf(sep, start) !== -1) {
    offset = this.indexOf(sep, start);
    result.push(this.slice(start, offset));

    // skip the seperator
    start = offset + sepLen;
  }
  return result;
};

// test
let buf = Buffer.from("hello ! world ! there");
let bufArr = buf.split(" ! ");
bufArr.map((e) => console.log(e.toString()));