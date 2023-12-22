const express = require("express");
const axios = require("axios");
const { ApolloServer } = require("apollo-server-express");
const itineraryType = require("./types/itinerary");
const itineraryResolvers = require("../resolvers/itineraryResolvers");
require("dotenv").config();

async function startServer() {
  const app = express();

  // passing the schemas and resolvers to the server
  const server = new ApolloServer({
    typeDefs: itineraryType,
    resolvers: itineraryResolvers,
  });

  await server.start();

  // Allows the GraphQL server to be accessed via an HTTP endpoint.
  server.applyMiddleware({ app });

  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    console.log(`Server ready at http://localhost:9000${server.graphqlPath}`);
    // await mockCoreServiceCall();
  });
}

startServer();

async function mockCoreServiceCall() {
  const mockItineraryInput = {
    title: "Test Trip",
    destination: "Copenhagen",
    duration: "5 days",
    budget: "2000",
    userPreferences: {
      diningOptions: {
        type: "restaurants",
        cuisine: "italian",
        priceRange: "3",
      },
      attractionOptions: {
        type: ["art", "monuments"],
        princeRange: "2",
      },
    },
  };

  await _executeMockMutation(mockItineraryInput);
}

async function _executeMockMutation(mockItineraryInput) {
  try {
    const response = await axios.post("http://localhost:9000/graphql", {
      query: `
        mutation CreateItinerary($input: ItineraryInput!) {
          createItinerary(itineraryInput: $input) {
            id
            title
            destination
            duration
            budget
            userPreferences {
              diningOptions {
                type
                cuisine
                priceRange
              }
              attractionOptions {
                type
                princeRange
              }
            }
            recommendedItineraryDescription
          }
        }
      `,
      variables: { input: mockItineraryInput },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
