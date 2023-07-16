const http = require("http");

// http.get({
//   host: 'localhost',
//   port: 1234, // port point of resource
//   path: '/?a=1',
// }, (res) => {

// });

const options = {
  host: "localhost",
  port: 1234, // port point of resource
  path: "/?a=1",
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};

let req = http.request(options, (res) => {
  let arr = [];
  res.on("data", (data) => {
    arr.push(data);
  });

  res.on("end", () => {
    console.log(Buffer.concat(arr).toLocaleString());
  });
});
req.end('{"name": "lg"}');
