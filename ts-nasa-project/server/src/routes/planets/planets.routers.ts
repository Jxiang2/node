import express, { Router } from "express";
import { getAllPlanets } from "./planet.controllers";

const planetRouter: Router = express.Router();

planetRouter.get('/planets', getAllPlanets);

export { planetRouter };
