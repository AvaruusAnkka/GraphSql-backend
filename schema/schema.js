const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
    }

    type Query {
        info: String!
        users: [User!]!
        user(id: ID!): User
    }
`

module.exports = typeDefs