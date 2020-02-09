const axiosRequest = require("../../_helpers/axiosRequest")
const  constants = require("../../config/config")

const getExchangeRates = async (code) => {
    try {
        const response = await axiosRequest.GET(`${constants.exchangeRatesUrl}&symbols=${code},SEK`)
        let rates = {}
        if(response.data && response.data.rates){
            rates =  response.data.rates
        }
        return rates
    } catch (error) {
        console.log(error)
        throw error
    }
} 


module.exports = getExchangeRates