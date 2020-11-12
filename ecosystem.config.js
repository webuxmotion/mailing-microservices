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
        Q_URI: ''
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
    {
      name: 'Mailing',
      script: basePath + '/mailing/index.js',
      watch: true,
      env: {
        MJ_API_PUBLIC: '',
        MJ_API_SECRET: '',
        Q_URI: ''
      }
    },
  ],
};
