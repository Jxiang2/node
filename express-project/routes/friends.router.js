const express = require("express");
const friendsController = require("../controllers/friends.controllers");

const friendsRouter = express.Router();

// middlewares
friendsRouter.use((req, res, next) => {
	console.log("ip address: ", req.ip);
	next();
});

// routes
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/:id", friendsController.getFriendDetail);

module.exports = friendsRouter;
