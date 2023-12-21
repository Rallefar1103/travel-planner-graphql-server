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
    //Here, itineraryInput contains the data sent from the frontend (e.g., title, description).
    createItinerary: async (_, { itineraryInput }) => {
      try {
        const response = await axios.post(
          `${baseURL}/itineraries`,
          itineraryInput
        );
        // Assuming the response structure matches the Itinerary type
        return response.data;
      } catch (error) {
        throw new Error("Error creating itinerary: " + error.message);
      }
    },
    // ... other mutations if any
  },
};

module.exports = itineraryResolvers;
