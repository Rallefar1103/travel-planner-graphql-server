const { gql } = require("apollo-server-express");

const itineraryType = gql`
  type Itinerary {
    id: ID!
    title: String!
    description: String!
    recommendations: String
  }

  type Query {
    getItinerary(id: ID!): Itinerary
  }

  input ItineraryInput {
    title: String!
    description: String!
  }

  type Mutation {
    createItinerary(itineraryInput: ItineraryInput): Itinerary
  }
`;

module.exports = itineraryType;
