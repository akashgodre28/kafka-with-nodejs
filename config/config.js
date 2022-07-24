const Config = {
  KAFKA_BOOTSTRAP_SERVER:
    process.env.KAFKA_BOOTSTRAP_SERVER || "localhost:9092",
  TOPIC: process.env.TOPIC || "test-topic-1",
};
module.exports = Config;
