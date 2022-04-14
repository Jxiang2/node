const express = require('express');
const res = require("express/lib/response");

// init app & middlewares
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// routes
app.get('/books', () => {
  res.json({ "msg": "welcome to the api" });
});