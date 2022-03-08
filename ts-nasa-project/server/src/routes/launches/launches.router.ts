import express, { Router } from "express";
import { httpGetAllLaunches } from "./lauches.controller";

const launchRouter: Router = express.Router();

launchRouter.get('/launches', httpGetAllLaunches);

export { launchRouter };


