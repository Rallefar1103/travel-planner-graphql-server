const { gql } = require("apollo-server-express");

const itineraryType = gql`
  type DiningOptions {
    type: String
    cuisine: String
    priceRange: String
  }

  type AttractionOptions {
    type: [String]
  }

  type UserPreferences {
    diningOptions: DiningOptions
    attractionOptions: AttractionOptions
  }

  type Itinerary {
    id: ID!
    title: String
    destination: String
    duration: String
    budget: String
    userPreferences: UserPreferences
    recommendedItineraryDescription: String
  }

  input DiningOptionsInput {
    type: String
    cuisine: String
    priceRange: String
  }

  input AttractionOptionsInput {
    type: [String]
  }

  input UserPreferencesInput {
    diningOptions: DiningOptionsInput
    attractionOptions: AttractionOptionsInput
  }

  input ItineraryInput {
    title: String
    destination: String
    duration: String
    budget: String
    userPreferences: UserPreferencesInput
  }

  type Query {
    getItinerary(id: ID!): Itinerary
  }

  type Mutation {
    createItinerary(itineraryInput: ItineraryInput): Itinerary
  }
`;

module.exports = itineraryType;
