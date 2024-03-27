"use strict";

require("dotenv").config();
const amqp = require("amqplib");


const connectToRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URI)
    if (!connection) {
      throw new Error("Connection not established")
    }

    const channel = connection.createChannel()

    return { connection, channel }
  } catch (error) {

  }
}

const connectToRabbitMQForTest = async () => {
  try {
    console.log("co.....")
    const { connection, channel } = await connectToRabbitMQ();

    //publish message to queue
    const queue = "test-queue";
    const message = "Hello, dev";
    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, Buffer.from(message));

    console.log("close.")
    connection.close()
  } catch (error) {

  }
}

module.exports = {
  connectToRabbitMQ,
  connectToRabbitMQForTest
}