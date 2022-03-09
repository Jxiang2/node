import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

// routers
import { planetRouter } from "./routes/planets/planets.router";
import { launchRouter } from "./routes/launches/launches.router";

const app: express.Application = express();

// cors options
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// settings
app.use(cors(options));
app.use(morgan("combined"));
app.use(express.json());

// serve client
app.use(express.static(path.join(__dirname, "..", "dist", "client")));

// routers
app.use('/planets', planetRouter);
app.use('/launches', launchRouter);

// if express can't find a route, react will take over it 
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "client", "index.html"));
});
export { app };