const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect('mongodb+srv://rootUser:123@cluster0.9os83.mongodb.net/bookstore?retryWrites=true&w=majority')
      .then(client => {
        dbConnection = client.db()
        return cb()
      }).catch(err => {
      console.log(err)
      return cb(err)
    })
  },
  getDB: () => dbConnection,
}