const { gql } = require("apollo-server-express");

const reviewType = gql`
  type Review {
    id: ID!
    author: User!
    content: String!
    rating: Int!
    date: String!
    // Other review fields...
  }
`;

module.exports = reviewType;
