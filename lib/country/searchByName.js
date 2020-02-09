const axiosRequest = require("../../_helpers/axiosRequest")
const getCountryDetails = require("./getCountryDetails")
const isRequestAllowed = require("../../_helpers/checkRequestLimit")

const searchByName = async (req, res) => {
    try {
        const name = req.query.name;
        // console.log(req.user)
        let isAllowed = await isRequestAllowed(req.user)
        if (isAllowed) {
            if (typeof (name) == 'string') {
                const response = await getCountryDetails(name);
                // console.log(response)
                res.status(200).send(response);
            } else {
                res.status(422).send("Invalid key word");
            }
        } else {
            res.status(403).send("Request Limit Over");
        }
    } catch (err) {
        console.log("Search failed.", err)
        res.status(500).send("Search failed." + err);
    }
}
module.exports = searchByName