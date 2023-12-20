const { gql } = require("apollo-server-express");

const destinationType = gql`
    type Destination {
        id: ID!
        name: String!
        country: String!
        description: String
        attractions: [Attraction]
        accommodations: [Accommodation]
        reviews: [Review]
        // Other destination fields...
    }
`;

module.exports = destinationType;
