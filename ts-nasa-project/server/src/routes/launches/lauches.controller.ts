import { getAllLaunches } from "../../models/lauches.model";
import { Request, Response } from "express";

const httpGetAllLaunches = (req: Request, res: Response) => {
    return res.status(200).json(getAllLaunches());
};

export {
    httpGetAllLaunches
};