const express = require('express');

// init app & middlewares
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// routes
app.get('/books', (req, res) => {
  res.status(200).json({ "msg": "welcome to the api" });
});