import { Launch, LaunchInput } from "../interfaces/Launches";

let latestFlightNumber = 100;

let launch1: Launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    destination: "Kepler-422 b",
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: true
};

const launches = new Map<number, Launch>();
launches.set(launch1.flightNumber, launch1);

function getAllLaunches () {
    return Array.from(launches.values());
}

function addNewLaunch (launchInput: LaunchInput) {
    latestFlightNumber++;
    launches.set(latestFlightNumber,
        {
            ...launchInput,
            flightNumber: latestFlightNumber,
            upcoming: true,
            customers: ["ZTM", "NASA"],
            success: true
        }
    );
}

export {
    getAllLaunches,
    addNewLaunch,
    LaunchInput
};