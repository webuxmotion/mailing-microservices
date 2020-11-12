const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');

const hostname = 'http://localhost' || process.env.hostname;
const databaseURL = `${hostname}:${port}`;

const get = async path => (await axios.get(`${databaseURL}/${path}`)).data.payload;
const post = async (path, body) => (await axios.post(`${databaseURL}/${path}`, { ...body })).data.payload;

module.exports = {
  Query: {
    mails: () => get('mails'),
    mail: (_, { id }) => get(`mails/${id}`),
  },
  Mutation: {
    mail: (_, args) => post('mails', args)
  }
};