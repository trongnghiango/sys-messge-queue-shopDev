const { connectToRabbitMQForTest } = require("./src/dbs/init.rabbit")

const run = async () => {

  await connectToRabbitMQForTest()
}

run();