import http from "http";
import expressApp, { express } from "./expressApp";

const PORT = process.env.PORT || 8000;
const server:http.Server  = http.createServer(expressApp);

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`);
});


