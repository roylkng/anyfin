const authenticateUser = require("../lib/user/authenticateUser")
const searchByName = require("../lib/country/searchByName")

module.exports = function (server) {
	server.post("/users/authenticate", authenticateUser);
	server.get("/country/serchbyname", searchByName);
};