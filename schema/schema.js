const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
    }

    type Query {
        users: [User]
    }
`

module.exports = typeDefs