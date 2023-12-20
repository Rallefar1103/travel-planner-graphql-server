const { gql } = require("apollo-server-express");

// read-only fetch, query is named hello and returns a string
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = { typeDefs };
