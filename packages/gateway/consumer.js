const amqp = require('amqplib/callback_api');

const q = 'test_q';

amqp.connect('amqps://jrhmioix:AnXzIHWTf7Mi5UI-fPkRYDddrm5yiLin@squid.rmq.cloudamqp.com/jrhmioix', (err, conn) => {
  if (err) throw new Error(err);

  conn.createChannel((err, ch) => {
    if (err) throw new Error(err);

    ch.assertQueue(q, { durable: true });
    ch.consume(q, msg => {
      console.log('I GOT A MESSAGE', msg.content.toString());
    }, { noAck: true });
  });
});