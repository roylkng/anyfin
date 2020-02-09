const axiosRequest = require("../../_helpers/axiosRequest")
const getExchangeRates = require("./getExchangeRates")
const  constants = require("../../config/config")


const getCountryDetails = async (name)=>{
    try {

        //getting details of cuntries
        const response = await axiosRequest.GET(`${constants.companyDetailsUrl}${name}`);
        if(response.data && response.data.length){
            const countries = response.data
            let countriesWithRates = []
            let currenciesCode  = []
            for (let i = 0; i < countries.length; i++) {
                const element = countries[i];
                let data = {
                    fullName : element.name,
                    population: element.population
                }
                for (let i = 0; i < element.currencies.length; i++) {
                    let currencies = element.currencies[i];
                    currenciesCode.push(currencies.code)
                }
                data.currencies = element.currencies
                countriesWithRates.push(data)
            }
            // get rates for all the currencies
            const exchangeRates = await getExchangeRates(currenciesCode.join(","))

            for (let i = 0; i < countriesWithRates.length; i++) {
                const element = countriesWithRates[i];
                for (let i = 0; i < element.currencies.length; i++) {
                    let currencies = element.currencies[i];
                    currencies.exchangeRate = exchangeRates[currencies.code]/exchangeRates['SEK']
                }
            }
            // console.log(countriesWithRates);
            return countriesWithRates
        } else return []
    } catch (error) {
        console.log("Error fetching details", error)
        throw error
    }
}

module.exports = getCountryDetails