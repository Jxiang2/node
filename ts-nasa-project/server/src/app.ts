import express from "express";
import cors from "cors";
import { planetRouter } from "./routes/planets/planets.routers";
import path from "path";

const app: express.Application = express();

// cors options
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// routers
app.use(planetRouter);

export { app };