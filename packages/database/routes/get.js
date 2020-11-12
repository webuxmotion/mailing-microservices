module.exports = server => {
  server.get('/', (_, res) => {
    res.send('hello from the database')
  });
};