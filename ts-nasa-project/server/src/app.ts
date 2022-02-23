import express from "express";

const app: express.Application = express();
app.use(express.json());

export { express, app };