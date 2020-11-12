const { gql } = require('apollo-server-express');

module.exports = gql`
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