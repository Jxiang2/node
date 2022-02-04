const axios = require("axios");

const resultList = [];

const getData = async () => {
	const res = await axios.get(`https://group-tasks-manager.herokuapp.com/api/group/groups/`);

	const jsonData = res.data;

	return jsonData.results;
};

getData().then((res) => {
	res.forEach((item) => {
		resultList.push(item);
	});
	console.log(resultList);
});
