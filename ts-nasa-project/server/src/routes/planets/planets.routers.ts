import { express } from "../../app";
import cors from "cors";
import { Router } from "express";
import { getAllPlanets } from "./planet.controllers";

const planetRouter: Router = express.Router();

planetRouter.get('/planets', getAllPlanets);

export { planetRouter };



