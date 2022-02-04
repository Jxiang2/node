const { parse } = require("csv-parse");
const fs = require("fs");

// read csv; readable stream -> pipe -> writable stream
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
dummy_results = [];
dummy_values = [];
fs.createReadStream("./data/dummy.txt", "utf8")
	.on("data", (data) => {
		data = data.split("\n");
		dummy_results = [...data];
	})
	.on("end", () => {
		dummy_results.forEach((pair, i) =>
			dummy_values.push(Number(pair.substring(pair.indexOf(":") + 1)))
		);
		console.log(dummy_values);
	});
