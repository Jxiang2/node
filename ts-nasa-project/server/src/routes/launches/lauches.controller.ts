import { LaunchInput } from "../../interfaces/Launches";
import { getAllLaunches, addNewLaunch } from "../../models/lauches.model";
import { Request, Response } from "express";

function httpGetAllLaunches (req: Request, res: Response) {
    return res.status(200).json(getAllLaunches());
};

function httpAddNewLaunch (req: Request, res: Response) {
    const launch: LaunchInput = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

export {
    httpGetAllLaunches,
    httpAddNewLaunch
};