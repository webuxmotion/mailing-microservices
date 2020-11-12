const server = require('express')();

const config = require('./config');
const { port } = config;

require('./dbUtil')(config);
require('./routes/get')(server);

server
  .listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}`)
  );