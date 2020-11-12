const mongoose = require('mongoose');
const MailSchema = require('./Models/Mail');

module.exports = config => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false
  });

  mongoose.model('Mail', MailSchema);
};