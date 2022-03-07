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

const launches = new Map<number, Launch>();

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

launches.set(lauch1.flightNumber, lauch1);

export { launches };