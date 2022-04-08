const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const PORT = 3000;

const app = express();

// kep api secure
app.use(helmet());

// serve static files
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/secret", (req, res) => {
  res.send("Your personal value is 42");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
}, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});