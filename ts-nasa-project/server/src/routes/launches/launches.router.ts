import express, { Router } from "express";
import { httpAddNewLaunch, httpGetAllLaunches } from "./lauches.controller";

const launchRouter: Router = express.Router();

// /launches & launches/ both work
launchRouter.get('/', httpGetAllLaunches);
launchRouter.post('/', httpAddNewLaunch);

export { launchRouter };


