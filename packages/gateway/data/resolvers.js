const { mockMails } = require('./mockData');

module.exports = {
  Query: {
    mails: () => mockMails,
    mail: (_, args) => mockMails[0],
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;

      return args;
    }
  }
};