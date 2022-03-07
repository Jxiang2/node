import express, { Router } from "express";
import { getAllPlanets } from "./planets.controller";

const planetRouter: Router = express.Router();

planetRouter.get('/planets', getAllPlanets);

export { planetRouter };
