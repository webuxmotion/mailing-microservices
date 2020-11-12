const { PORT } = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI: 'mongodb://user:password@mlabdomain.com:port/dbname'
}