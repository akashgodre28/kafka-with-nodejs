const express = require("express");
const controller = require("../app/controllers/test-controller");
const router = express.Router();

router.post("/send-message",  controller.sendMessage);

module.exports = router;
