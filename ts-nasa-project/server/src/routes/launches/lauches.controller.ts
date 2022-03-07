import { launches } from "../../models/lauches.model";
import { Request, Response } from "express";

const getAllLaunches = (req: Request, res: Response) => {
    return res.status(200).json(Array.from(launches.values()));
};

export {
    getAllLaunches
};