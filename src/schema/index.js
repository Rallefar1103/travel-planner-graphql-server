const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const itineraryType = require("./types/itinerary");
const itineraryResolvers = require("../resolvers/itineraryResolvers");

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

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
