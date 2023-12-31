const axios = require("axios");
require("dotenv").config();

const baseURL = process.env.CORE_SERVICE_URL;

const itineraryResolvers = {
  Query: {
    // Resolver to get an itinerary by ID
    getItinerary: async (_, { id }) => {
      try {
        const response = await axios.get(`${baseURL}/itineraries/${id}`);
        // Assuming the response structure matches the Itinerary type
        return response.data;
      } catch (error) {
        throw new Error("Error fetching itinerary: " + error.message);
      }
    },
  },
  Mutation: {
    // Resolver to create a new itinerary from the graphql mutation on the frotend
    createItinerary: async (_, { itineraryInput }) => {
      console.log("GRAPHQL INPUT: ", itineraryInput);
      try {
        const response = await axios.post(
          `${baseURL}/itineraries`,
          itineraryInput
        );

        return response.data;
      } catch (error) {
        console.log("GRAPHQL-SERVER RESOLVER Error", error);
        throw new Error("Error creating itinerary: " + error.message);
      }
    },
  },
};

module.exports = itineraryResolvers;
