const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url);
  console.log(pathname, "---", query);

  // post
  let arr = [];
  req.on("data", (data) => arr.push(data));
  req.on("end", () => {
    let obj = Buffer.concat(arr).toString();

    // json
    if (req.headers["content-type"] === "application/json") {
      let a = JSON.parse(obj); // convert to object
      a.add = "互联网人的大学";
      res.end(JSON.stringify(a)); // convert back to JSON
    }

    // http form
    else if (
      req.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      let qs = querystring.parse(obj);
      res.end(JSON.stringify(qs));
    }
  });
});

server.listen(1234);
