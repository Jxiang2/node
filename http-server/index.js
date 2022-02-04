const http = require("http");

const PORT = 3000;

const friends = [
	{
		id: 1,
		name: "Newton",
	},
	{
		id: 2,
		name: "Tesla",
	},
];

// req, res are listeners
const server = http.createServer((req, res) => {
	const items = req.url.split("/"); // /friends/2

	if (items[1] === "friends") {
		res.setHeader("Content-Type", "application/json");
		if (items.length === 3) {
			if (Number(items[2]) >= friends.length) {
				res.statusCode = 404;
				res.end("no such friend");
			} else {
				res.end(JSON.stringify(friends[Number(items[2])]));
			}
		} else {
			res.end(JSON.stringify(friends));
		}
	} else {
		res.statusCode = 404;
		res.end("invalid url");
	}
});

server.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
}); //127.0.0.1:3000
