const express = require('express')
const { ObjectId } = require('mongodb')
const { getDB, connectToDB } = require('./db')

let db
const app = express()
// parse any JSON comming from requests
app.use(express.json())

connectToDB((err) => {
  if (!err) {
    // init app & middlewares
    app.listen(3000, () => {
      console.log('listening on port 3000')
    })
    db = getDB()
  } else {
    console.log(err)
  }
})

// CRUD routes

// get all books
app.get('/books', (req, res) => {
  const page = req.query.page || 0
  const docsPerPage = 5

  let books = []

  db.collection('books')
    .find() // cursor -> toArray forEach
    .sort({ author: 1 })
    .skip(page * docsPerPage)
    .limit(docsPerPage)
    .forEach(book => books.push(book))
    .then(() => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: 'could not fetch the docs' }))
})

// get books by id
app.get('/books/:id', (req, res) => {
  const id = req.params.id

  if (ObjectId.isValid(id)) {
    db.collection('books')
      .findOne({ _id: ObjectId(id) })
      .then(book => {
        if (book)
          res.status(200).json(book)
        else
          res.status(404).json({ error: 'document not found' })
      })
  } else {
    res.status(500).json({ error: 'not a valid doc id' })
  }
})

// post a book with upsert based on title
app.post('/books', (req, res) => {
  const upsertData = req.body

  db.collection('books')
    .updateOne(
      { title: upsertData.title },
      { $set: upsertData },
      { upsert: true },
    )
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({ error: 'could not post a new document' })
    })
})

// update a books
app.patch('/books/:id', (req, res) => {
  const updates = req.body
  const id = req.params.id

  if (ObjectId.isValid(id)) {
    db.collection('books')
      .updateOne({ _id: ObjectId(id) }, { $set: updates })
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: 'could not update the doc' }))
  } else {
    res.status(500).json({ error: 'not a valid doc id' })
  }
})

// delete a book
app.delete('/books/:id', (req, res) => {
  const id = req.params.id

  if (ObjectId.isValid(id)) {
    db.collection('books')
      .deleteOne({ _id: ObjectId(id) })
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: 'could not delete the doc' }))
  } else {
    res.status(500).json({ error: 'not a valid doc id' })
  }
})