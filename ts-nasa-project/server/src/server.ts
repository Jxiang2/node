import http from "http";
import { app, express } from "./app";
import { Request, Response, NextFunction } from "express";

const PORT = process.env.PORT || 8000;
const server: http.Server  = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`);
});


