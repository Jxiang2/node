const decrypt = (data) => {
	return `decrypted data: ${data}`;
};

const read = () => {
	return decrypt("data");
};

module.exports = {
	read: read,
};
