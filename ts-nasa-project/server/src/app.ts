import express from "express";
import cors from "cors";
import { planetRouter } from "./routes/planets/planets.routers";

const app: express.Application = express();

// cors options
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

// routers
app.use(planetRouter);

export { express, app };