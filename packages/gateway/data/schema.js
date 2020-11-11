const { makeExecutableSchema } = require('graphql-tools');
const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const typeDefs = gql`
  type Query { hey: String! }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });