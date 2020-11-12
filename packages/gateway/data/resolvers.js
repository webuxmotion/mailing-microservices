const { mockMails } = require('./mockData');
const axios = require('axios');

const getMails = async () => {
  const mails = (await axios.get(`http://localhost:4001/mails`)).data.payload;
  
  return mails;
}

module.exports = {
  Query: {
    mails: () => getMails(),
    mail: (_, args) => mockMails[0],
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;

      return args;
    }
  }
};