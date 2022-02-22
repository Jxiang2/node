import http from "http";
import app, { express } from "./expressApp";

const PORT = process.env.PORT || 8000;
const server: http.Server  = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`);
});


