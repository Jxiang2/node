const express = require("express");
const rootController = require("../controllers/root.controllers");

const rootRouter = express.Router();

rootRouter.get("/", rootController.welcomeMsg);

module.exports = rootRouter;
