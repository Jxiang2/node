interface Launch {
    flightNumber: number;
    mission: string;
    rocket: string;
    lauchDate: Date;
    destination: string;
    customers: string[];
    upcoming: boolean;
    success: boolean;
}

let lauch1: Launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    lauchDate: new Date("December 27, 2030"),
    destination: "Kepler-422 b",
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: false
};

const launches = new Map<number, Launch>();
launches.set(lauch1.flightNumber, lauch1);

function getAllLaunches () {
    return Array.from(launches.values());
}

export { getAllLaunches };