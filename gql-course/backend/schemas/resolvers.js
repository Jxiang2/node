const { UserList, MovieList } = require("../data")
const _ = require("loadsh")


/**
 * 4 arguments of query resolvers are
 * parent, args, context, info (not very useful)
 * 
 * the 1 argument of field resolver is args
 * 
 * The name of object in resolver must be identical to their definitions in type-defs.js
 */
const resolvers = {
  User: {
    favouriteMovies: (args) => {
      console.log(args)
      return _.filter(MovieList, (movie) => movie.yearOfPublication < Number(args.age) * 100)
    },

    friends: (args) => {
      return _.filter(UserList, (user) => user.age === args.age && user.id !== args.id)
    }
  },

  Query: {
    users: () => {
      if (UserList) return { data: UserList }

      return { error: "There was an error on retrieving UserList" }
    },

    user: (parent, args) => {
      const user = _.find(UserList, { id: Number(args.id) })

      if (user) return { data: user }

      return { error: "Could not find the user in database" }
    },

    movies: () => {
      if (MovieList) return { data: MovieList }

      return { error: "There was an error on retrieving MovieList" }
    },

    movie: (parent, args) => {
      const filter = args.name
      const movie = _.find(MovieList, { name: filter })

      if (movie) {
        return { data: movie }
      }
      return { error: "Could not find the movie in database" }
    },
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

      if (user) {
        _.remove(UserList, (user) => user.id === Number(args.idToDelete))
        return { data: user }
      }

      return { error: "Could not find the user id" }
    }
  },

  UsersResult: {
    __resolveType: (obj) => {
      if (obj.data) return "UsersSuccessfulResult"

      if (obj.error) return "UsersErrorResult"

      return null
    }
  },

  UserResult: {
    __resolveType: (obj) => {
      if (obj.data) return "UserSuccessfulResult"

      if (obj.error) return "UserErrorResult"

      return null
    }
  },

  MoviesResult: {
    __resolveType: (obj) => {
      if (obj.data) return "MoviesSuccessfulResult"

      if (obj.error) return "MoviesErrorResult"

      return null
    }
  },

  MovieResult: {
    __resolveType: (obj) => {
      if (obj.data) return "MovieSuccessfulResult"

      if (obj.error) return "MovieErrorResult"

      return null
    }
  },

  DeleteUserResult: {
    __resolveType: (obj) => {
      if (obj.data) return "DeleteUserSuccessfulResult"

      if (obj.error) return "DeleteUserErrorResult"

      return null
    }
  }
}

module.exports = {
  resolvers
}