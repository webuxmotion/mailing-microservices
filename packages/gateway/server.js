const connect = require('connect');
const { ApolloServer, gql } = require('apollo-server-express');
const query = require('qs-middleware');
const schema = require('./data/schema');

const { port } = require('./config');

const server = new ApolloServer({ schema });

const app = connect();
const path = '/graphql';

app.use(query());

server.applyMiddleware({ app, path });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);