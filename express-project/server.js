const express = require("express");

const friendsRouter = require("./routes/friends.router");
const rootRouter = require("./routes/root.router");

const app = express();

const PORT = 3000;

// common middlewares
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url}... finished in ${delta}ms`);
});
app.use(express.json()); // convert every json/application request body to JS object

// routers
app.use("/friends", friendsRouter);
app.use("/", rootRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
