const REQUEST_TIMEOUT = 500;

const encrypt = (data) => {
	return `encryted ${data}`;
};

const send = (url, data) => {
	const encryptedData = encrypt(data);
	console.log(`sending ${encryptedData} to ${url}`);
};

module.exports = {
	REQUEST_TIMEOUT,
	send: send,
};
