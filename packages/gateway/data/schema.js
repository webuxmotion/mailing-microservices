const { makeExecutableSchema } = require('graphql-tools');
const { gql } = require('apollo-server-express');

const resolvers = require('./resolvers');

const typeDefs = gql`
  type Query { 
    mails: [Mail]
    mail(subject: String!, receiver: String!): Mail
  }

  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }

  type Mail {
    _id: String
    subject: String
    receiver: String
    content: String
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });