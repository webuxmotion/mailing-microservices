const server = require('express')();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');

const port = 3000;

server
  .use(bodyParser.json())
  .use('/graphql', graphqlExpress({ schema }))
  .use('/gq', graphiqlExpress({ endpointURL: '/graphql'}))
  .listen(port, () => {
    console.log(`Listening API Gateway on port ${port}`);
  });