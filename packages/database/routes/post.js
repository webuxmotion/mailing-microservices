const { 
  mailHandler,
} = require('../controllers/post');

module.exports = server => {
  server
  .post('/mails', mailHandler)
};