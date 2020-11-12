const { 
  pingHandler,
  mailHandler,
  singleMailHandler,
} = require('../controllers/get');

module.exports = server => {
  server
  .get('/', pingHandler)
  .get('/mails', mailHandler)
  .get('/mails/:id', singleMailHandler)
};