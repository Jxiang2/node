import express from "express";
import morgan from "morgan";
import cors from "cors";
import { planetRouter } from "./routes/planets/planets.routers";
import path from "path";

const app: express.Application = express();

// cors options
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// settings
app.use(cors(options));
app.use(morgan("combined"));
app.use(express.json());

// server client
app.use(express.static(path.join(__dirname, "..", "dist", "client")));

// routers
app.use(planetRouter);

// set home page to react's home page
// when running dev mode, epxect a frontend page with no data
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "client", "index.html"));
});
app.get('/launch', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "client", "index.html"));
});

export { app };