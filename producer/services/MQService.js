const amqp = require("amqplib/callback_api");

const CONN_URL = process.env.QUEUE_URL;
console.log(process.env.QUEUE_URL);
let ch = null;
amqp.connect(CONN_URL, function(err, conn) {
    conn.createChannel(function(err, channel) {
        if (err) {
            console.log(e);
        }
        ch = channel;
    });
});
module.exports = publishToQueue = async(queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data), { persistent: true });
};
process.on("exit", (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});