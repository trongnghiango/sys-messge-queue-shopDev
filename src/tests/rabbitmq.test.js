"use strict";

const { connectToRabbitMQForTest } = require("../dbs/init.rabbit")

describe("Connect to RabbitMQ", () => {
  it('should connect to success RabbitMq', async () => {
    const result = await connectToRabbitMQForTest()
    expect(result).toBeUndefined();

  });
})