import express, {Application, Request, Response, NextFunction} from "express";

const app: express.Application = express()

const add = (a: number, b: number): number => {
    return a+b
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5,5));
    res.send('Hello')
})

app.listen(8000, ()=>console.log('server running'));