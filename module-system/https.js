const { send } = require("./request");
const { read } = require("./response");
const makeRequest = (url, data) => {
	send(url, data);
	return read();
};

const res = makeRequest("http://www.googole.com", "hello");
console.log(res);
