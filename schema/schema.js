const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id:         ID
        createdAt:  String
        username:   String!
        password:   String!
    }

    type Query {
        info:           String!
        users:          [User!]!
        user(id: ID!):  User
    }

    type Mutation {
        createUser(username: String!, password: String!):                 User!
        updateUserName(id: ID!, username: String, password: String):    User
        deleteUser(id: ID!):                                        User
    }
`;

module.exports = typeDefs;
