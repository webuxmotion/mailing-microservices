const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

module.exports = async (_, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch (err) {
    error = err
  }

  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 200,
    payload: mails || error
  });
}