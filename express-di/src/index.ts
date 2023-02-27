import 'reflect-metadata'

import express from 'express'
import { container } from "tsyringe"
import BookController from "./book/BookController"

const port = 8080
const app = express()

const bookController = container.resolve(BookController)

app.use('/books', bookController.routes());
app.listen(port, () => console.log(`listening on port ${port}`))