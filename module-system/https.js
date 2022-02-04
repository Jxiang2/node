const { send, read } = require("./internals");

const makeRequest = (url, data) => {
	send(url, data);
	return read();
};

const res = makeRequest("http://www.googole.com", "hello");
console.log(res);
