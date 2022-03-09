const { ApolloServer } = require("apollo-server-express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const express = require("express")
const app = express();

// Load schema & resolver
const typeDefs = require("./schema/schema")
const resolvers = require("./resolver/resolver")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma
    }
})

const port = 4000;

server.start().then((res) => {
    server.applyMiddleware({ app })
    app.listen(port, () => {
        console.log(`http://localhost:${port}${server.graphqlPath}`)
    })
})
