const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
	{ id: 0, name: "Newton" },
	{ id: 1, name: "Einstein" },
];

app.get("/", (req, res) => {
	res.json({ message: "Welcome!!!" });
});

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url}... finished in ${delta}ms`);
});

app.get("/friends", (req, res) => {
	res.status(200).json(friends);
});

app.get("/friends/:id", (req, res) => {
	const friendID = Number(req.params.id);
	const friend = friends[friendID];
	if (friend) {
		res.json(friend);
	} else {
		res.status(404).json({
			error: "Friend does not exist",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
