const { gql } = require("apollo-server-express");

const attractionType = gql`
    type Attraction {
        id: ID!
        name: String!
        description: String
        type: String
        location: String
        operatingHours: String
        // Other attraction fields...
    }
`;
