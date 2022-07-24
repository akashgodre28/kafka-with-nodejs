const { Kafka } = require("kafkajs");

const appLogger = require("../config/logger.js");
const config = require("../config/config");

// the client ID lets kafka know who's producing the messages
const clientId = "test-kafka-0";

// we can define the list of brokers in the cluster
const brokers = [config.KAFKA_BOOTSTRAP_SERVER];

// this is the topic to which we want to write messages
const topic = config.TOPIC;

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers });
const consumer = kafka.consumer({ groupId: clientId });

const consume = async () => {
  // first, we wait for the client to connect and subscribe to the given topic
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    // this function is called every time the consumer gets a new message
    eachMessage: ({ message }) => {
      // here, we just log the message to the standard output
      appLogger.log(`received message: ${message.value}`);
    },
  });
};

module.exports = consume;
