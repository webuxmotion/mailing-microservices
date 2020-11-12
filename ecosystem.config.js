const path = require('path');
const basePath = path.join(__dirname, '/packages');

const dbPort = 4001;

module.exports = {
  apps : [
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      watch: true,
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: dbPort,
        Q_URI: 'amqps://jrhmioix:AnXzIHWTf7Mi5UI-fPkRYDddrm5yiLin@squid.rmq.cloudamqp.com/jrhmioix'
      }
    },
    {
      name: 'Database',
      script: basePath + '/database/server.js',
      watch: true,
      env: {
        PORT: dbPort
      }
    },
  ],
};
