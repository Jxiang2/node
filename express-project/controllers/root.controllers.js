function welcomeMsg(req, res) {
	return res.json({ message: "Welcome!!!" });
}

module.exports = {
	welcomeMsg,
};
