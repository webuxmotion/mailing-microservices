const { mockMails } = require('./mockData');
const axios = require('axios');

const getMails = async () => {
  const mails = (await axios.get(`http://localhost:4001/mails`)).data.payload;

  return mails;
}

const getSignleMail = async id => {
  const mail = (await axios.get(`http://localhost:4001/mails/${id}`)).data.payload;

  return mail;
}

module.exports = {
  Query: {
    mails: () => getMails(),
    mail: (_, { id }) => getSignleMail(id),
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;

      return args;
    }
  }
};