const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schemas/type-defs")
const { resolvers } = require("./schemas/resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      client_id: "xjy",
      client_secret: "we0wcwece3291uj1ed2dxew1",
      req,
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server is running ar ${url}`)
})