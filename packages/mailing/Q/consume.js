const amqp = require('amqplib/callback_api');

const { q: { uri }} = require('../config');
const sendMail = require('../handler/sendMail');

module.exports = () => {
  const q = 'test_q';

  amqp.connect(uri, (err, conn) => {
    if (err) throw new Error(err);

    conn.createChannel((err, ch) => {
      if (err) throw new Error(err);

      ch.assertQueue(q, { durable: true });

      ch.consume(q, msg => {
        let mail;

        try {
          mail = JSON.parse(msg.content.toString());
        } catch (err) {
          console.log(err);

          mail = msg.content.toString();
        }

        console.log('I received a mail!', mail);

        sendMail(mail);

        ch.ack(msg);
      }, { noAck: false });
    });
  });
}
