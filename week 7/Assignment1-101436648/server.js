const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const connectDB = require('./db'); // Import your DB connection file
const typeDefs = require('./schema'); // Import GraphQL schema (adjust the path)
const resolvers = require('./resolvers'); // Import resolvers (adjust the path)

const app = express();

// MongoDB connection
connectDB();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start(); // Wait for Apollo server to start
  server.applyMiddleware({ app }); // Apply the middleware after the server has started

  // Listen on a port
  app.listen(4000, () => {
    console.log(`Server is running at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
