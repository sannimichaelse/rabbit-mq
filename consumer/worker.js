var amqp = require("amqplib/callback_api");
const CONN_URL = process.env.QUEUE_URL;
console.log(process.env.QUEUE_URL);
amqp.connect(CONN_URL, function(err, conn) {
    conn.createChannel(function(err, ch) {
        ch.consume(
            "user-messages",
            function(msg) {
                console.log(".....");
                setTimeout(function() {
                    console.log("Message:", msg.content.toString());
                    ch.ack(msg);
                }, 8000);
            }, { noAck: false }
        );
    });
});