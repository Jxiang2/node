// read csv
// readable stream -> pipe -> writable stream
const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

const isHabitablePlanet = (planet) => {
	return (
		planet["koi_disposition"] === "CONFIRMED" &&
		planet["koi_insol"] > 0.36 &&
		planet["koi_insol"] < 1.11 &&
		planet["koi_prad"] < 1.6
	);
};

fs.createReadStream("./data/kepler_data.csv")
	.pipe(
		parse({
			comment: "#",
			columns: true,
		})
	)
	.on("data", (data) => {
		isHabitablePlanet(data) && results.push(data);
	})
	.on("error", (err) => {
		console.log(err.message);
	})
	.on("end", () => {
		console.log(`${results.length} habitable planets found!`);
	});

// read txt dummy data
const readline = require("readline");
const fs1 = require("fs");

let counter = 0;

let lineReader = readline.createInterface({
	input: fs1.createReadStream("./data/dummy.txt").on("end", () => {
		console.log("all lines are processed");
	}),
});

lineReader
	.on("line", (line) => {
		counter++;
	})
	.on("close", () => {
		console.log(counter);
	});
