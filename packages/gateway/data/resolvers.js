const mockMails = [
  {
    subject: "My First email",
    receiver: "text@test.com",
    content: "hello world"
  },
  {
    subject: "My Second email",
    receiver: "text@test.com",
    content: "hello world"
  },
  {
    subject: "My Third email",
    receiver: "text@test.com",
    content: "hello world"
  }
]

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