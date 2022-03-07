import express, { Router } from "express";
import { getAllLaunches } from "./lauches.controller";

const launchRouter: Router = express.Router();

launchRouter.get('/launches', getAllLaunches);

export { launchRouter };


