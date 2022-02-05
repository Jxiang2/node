const express = require("express");
const messageController = require("../controllers/message.controllers");

const messageRouter = express.Router();

messageRouter.get("/", messageController.getMessage);
messageRouter.post("/", messageController.postMessage);

module.exports = messageRouter;
