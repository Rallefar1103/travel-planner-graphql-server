const { gql } = require("apollo-server-express");

// read-only fetch, query is named hello and returns a string
const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    reviews: [Review]
    // Other user fields...
  }
`;

module.exports = userType;
