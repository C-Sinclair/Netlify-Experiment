import { ApolloServer, gql } from "apollo-server-lambda"

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: (root, args, context) => {
            return "Hello, World"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

exports.handler = server.createHandler()
