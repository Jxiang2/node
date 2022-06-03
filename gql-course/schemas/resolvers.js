const { UserList, MovieList } = require("../data")
const _ = require("loadsh")

const resolvers = {
  Query: {
    // User resolvers
    users: () => {
      return UserList
    },
    user: (parent, args) => {
      const filter = args.id
      const user = _.find(UserList, { id: Number(filter) })
      return user
    },

    // Movie resolvers
    movies: () => {
      return MovieList
    },
    movie: (parent, args) => {
      const filter = args.name
      const movie = _.find(MovieList, { name: filter })
      return movie
    }
  },

  // User's related fileds
  User: {
    specifiedMovies: (args) => {
      return _.filter(MovieList, (movie) => movie.yearOfPublication < args.age * 100)
    },

    friends: (args) => {
      return _.filter(UserList, (user) => user.age === args.age && user.id !== args.id)
    }
  }
}

module.exports = {
  resolvers
}