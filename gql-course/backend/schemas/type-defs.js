const { gql } = require("apollo-server")

const typeDefs = gql`
  type UsersSuccessfulResult {
    data: [User!]!
  }

  type UsersErrorResult {
    error: String!
  }

  type UserSuccessfulResult {
    data: User!
  }

  type UserErrorResult {
    error: String!
  }

  type MoviesSuccessfulResult {
    data: [Movie!]!
  }

  type MoviesErrorResult {
    error: String!
  }

  type MovieSuccessfulResult {
    data: Movie!
  }

  type MovieErrorResult {
    error: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favouriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: UsersResult
    user (id: ID!): UserResult
    movies: MoviesResult
    movie (name: String!): MovieResult
  }

  type Mutation {
    createUser (createUserinput: CreateUserInput!): User!
    updateUsername (updateUsernameInput: UpdateUsernameInput!): User
    deleteUser (idToDelete: ID!): User
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality = BRAZIL
  }
  
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }

  union UsersResult = UsersSuccessfulResult | UsersErrorResult
  union UserResult = UserSuccessfulResult | UserErrorResult

  union MoviesResult = MoviesSuccessfulResult | MoviesErrorResult
  union MovieResult = MovieSuccessfulResult | MovieErrorResult
`

module.exports = { typeDefs }