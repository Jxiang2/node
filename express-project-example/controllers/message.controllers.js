const path = require("path");

function getMessage(req, res) {
	const msgPath = path.join(__dirname, "..", "public", "download.jpeg");
	return res.status(200).sendFile(msgPath);
}

function postMessage(req, res) {
	console.log("Uploading message...");
	return;
}

module.exports = {
	getMessage,
	postMessage,
};
