const { gql } = require("apollo-server-express");

const accomodationType = gql`
    type Accomodation {
        id: ID!
        name: String!
        type: String!
        location: String
        pricePerNight: Float
        amenities: [String]
        reviews: [Review]
        // Other accommodation fields...
    }
`;

module.exports = accomodationType;
