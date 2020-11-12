const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

module.exports = async ({ params: { id }}, res) => {
  let mail;
  let error;

  try {
    mail = await Mail.findOne({ _id: id });
  } catch (err) {
    error = err
  }

  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 200,
    payload: mail || error
  });
}