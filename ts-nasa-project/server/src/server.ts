import http from "http";
import { app, express } from "./app";

const PORT = process.env.PORT || 8000;
const server: http.Server  = http.createServer(app);

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hello')
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`);
});


