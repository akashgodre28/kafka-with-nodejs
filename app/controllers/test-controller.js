const produce = require("../../kafka/producer");
const appLogger = require("../../config/logger.js");

module.exports = {
  async sendMessage(req, res) {
    produce(req.body).catch((err) => {
      appLogger.error("error in producer: ", err);
    });
    res.status(200).json({ message: "Message Sent", status: 200 });
  },
};
