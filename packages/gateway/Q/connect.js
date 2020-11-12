const amqp = require('amqplib/callback_api');

const q = 'test_q';

amqp.connect('amqps://jrhmioix:AnXzIHWTf7Mi5UI-fPkRYDddrm5yiLin@squid.rmq.cloudamqp.com/jrhmioix', (err, conn) => {
  if (err) throw new Error(err);

  conn.createChannel((err, ch) => {
    if (err) throw new Error(err);

    ch.assertQueue(q, { durable: true });
    ch.sendToQueue(q, Buffer.from('Hello Test CONSUMER'));
  });

  setTimeout(() => {
    conn.close();

    process.exit(0);
  }, 1000);
});