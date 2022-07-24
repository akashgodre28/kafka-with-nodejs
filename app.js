const express = require("express"); // Importing express module

const bodyParser = require("body-parser");
const router = require("./routes/routes");
const appLogger = require("./config/logger.js");
const consume = require("./kafka/consumer");


const app = express(); // Creating an express object

app.use(bodyParser.json({ extended: true }));

app.use("/", router);

consume().catch((err) => {
  appLogger.error("error in consumer: ", err);
});

module.exports = app;
