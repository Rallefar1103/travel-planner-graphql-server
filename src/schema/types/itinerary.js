const { gql } = require("apollo-server-express");

const itineraryType = gql`
    type Itinerary {
        id: ID!
        title: String!
        description: String!
        // Other fields...
    }
`;

module.exports = Itinerary;
