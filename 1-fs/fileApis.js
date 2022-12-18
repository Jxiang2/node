const fs = require("fs");
const path = require("path");

// write files, "r+": add one first line; "w+": override file if file already exists
fs.writeFile(
  path.join(__dirname, "data.txt"),
  "hello 123",
  { mode: 438, flag: "w+", encoding: "utf-8" },
  (err) => {
    !err &&
      fs.readFile("data.txt", "utf-8", (err, data) => {
        console.log("write excuted");
      });
  },
);

// append to file
fs.appendFile(path.join(__dirname, "data.txt"), "\nhello nodeJS", (err) => {
  console.log("append excuted");
});

// read file
fs.readFile(path.join(__dirname, "data.txt"), "utf-8", (err, data) => {
  if (!err) console.log(data);
  else console.log(err);
});

// copy file
fs.copyFile("data.txt", "dataTest.txt", () => {
  console.log("copy excuted");
});

// open/ close file df = 21 if not error
fs.open("data.txt", "r", (err, fd) => {
  console.log(fd);
  fs.close(fd, (err) => console.log("close excuted"));
});
