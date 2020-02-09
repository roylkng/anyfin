const instance = require("axios");
var axios = instance.create({
	validateStatus: function (status)
	{
		return status < 500;
	}
});

module.exports = {
	GET: async (url, headers) => {
		console.log("Calling get request", url);
		return axios({
			method: "GET",
			url: url,
			headers: headers
		});
	},
	POST: async (url, requestBody = {}, headers= {}) => {
		console.log("Calling post request", url);
		return axios({
			method: "POST",
			url: url,
			headers: headers,
			data: requestBody
		});
	}
};
