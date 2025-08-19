const amqplib = require('amqplib');
const { EmailService } = require('../services');
const { GMAIL_EMAIL } = require('./server-config');

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://localhost");
        const channel = await connection.createChannel();
        await channel.assertQueue("airline-noti-service");
        channel.consume("airline-noti-service", async (data) => {
            console.log("buffred data :",`${Buffer.from(data.content)}`);
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            // const object = JSON.parse(Buffer.from(data).toString());
            await EmailService.sendEmail(GMAIL_EMAIL, object.recepientEmail, object.subject, object.text);
            channel.ack(data);
        })
    } catch(error) {
        console.log(error)
    }
}

module.exports = {connectQueue};