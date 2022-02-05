const friends = require("../models/friends.model");

function getFriends(req, res) {
	return res.status(200).json(friends);
}

function getFriendDetail(req, res) {
	const friendID = Number(req.params.id);
	const friend = friends[friendID];
	if (friend) {
		return res.json(friend);
	} else {
		return res.status(404).json({
			error: "Friend does not exist",
		});
	}
}

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(400).json({
			error: "Missing friend name",
		});
	}
	const newFriend = {
		name: req.body.name,
		id: friends.length,
	};
	friends.push(newFriend);
	return res.status(201).json(newFriend);
}

module.exports = {
	postFriend,
	getFriendDetail,
	getFriends,
};
