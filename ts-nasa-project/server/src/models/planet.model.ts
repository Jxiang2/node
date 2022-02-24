// read csv
// readable stream -> pipe -> writable stream

import { parse } from "csv-parse";
import fs from "fs";

interface Planet {
    koi_disposition: string;
    koi_insol: number;
    koi_prad: number;
}

const planets: object[] = [];
const isHabitablePlanet = <T extends Planet>(planet: T) => {
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
		isHabitablePlanet(data) && planets.push(data);
	})
	.on("error", (err) => {
		console.log(err.message);
	})
	.on("end", () => {
		console.log(`${planets.length} habitable planets found!`);
	});

export { planets };