const { UserList, MovieList } = require("../data")
const _ = require("loadsh")

const resolvers = {
  Query: {
    users: () => {
      return UserList
    },
    user: (parent, args) => {
      const filter = args.id
      const user = _.find(UserList, { id: Number(filter) })
      return user
    },

    movies: () => {
      return MovieList
    },
    movie: (parent, args) => {
      const filter = args.name
      const movie = _.find(MovieList, { name: filter })
      return movie
    },
  },

  // User's related fileds
  User: {
    favouriteMovies: (args) => {
      return _.filter(MovieList, (movie) => movie.yearOfPublication < args.age * 100)
    },

    friends: (args) => {
      return _.filter(UserList, (user) => user.age === args.age && user.id !== args.id)
    }
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.createUserinput
      user.id = UserList[UserList.length - 1].id + 1
      UserList.push(user)
      return user
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.updateUsernameInput
      let userToUpdate

      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername
          userToUpdate = user
        }
      })

      return userToUpdate
    },

    deleteUser: (parent, args) => {
      const user = _.find(UserList, { id: Number(args.idToDelete) })
      _.remove(UserList, (user) => user.id === Number(args.idToDelete))
      return user
    }
  }


}

module.exports = {
  resolvers
}