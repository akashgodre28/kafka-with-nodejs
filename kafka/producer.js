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

const producer = kafka.producer();

// we define an async function that writes a new message each second
const produce = async (message) => {
  await producer.connect();
  try {
    appLogger.info("Sending message....");
    // send a message to the configured topic
    await producer.send({
      topic,
      messages: [
        {
          key: "kafkaCode",
          value: JSON.stringify({
            eventType: "TEST",
            payload: message,
          }),
        },
      ],
    });
    appLogger.info("Message Sent....");
  } catch (err) {
    appLogger.error("could not write message : " + err.message);
  }
};

module.exports = produce;
