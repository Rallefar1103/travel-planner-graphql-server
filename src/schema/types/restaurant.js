const { gql } = require("apollo-server-express");

const restaurantType = gql`
    type Restaurant {
        id: ID!
        name: String!
        cuisine: String
        isBar: Boolean
        location: String
        reviews: [Review]
        // Other restaurant fields...
    }
`;

module.exports = restaurantType;
