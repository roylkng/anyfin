var mongoose = require("mongoose")

const mongodbUri = "mongodb://127.0.0.1:27017/anyfin";


mongoose.connect(mongodbUri);

module.exports = {
	mongoose: mongoose,
	Schema: mongoose.Schema,
	secretKey: "anyfin#123anyfin",
	companyDetailsUrl: "https://restcountries.eu/rest/v2/name/",
	exchangeRatesUrl: "http://data.fixer.io/api/latest?access_key=65a46a3c3c9c4a87ab07b6a72500b80d"
};
