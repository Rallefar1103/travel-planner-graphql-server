const axios = require("axios");

const baseURL = "http://travel-planner-core-service/api"; // Replace with actual URL of your service

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
    // Resolver to create a new itinerary
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
