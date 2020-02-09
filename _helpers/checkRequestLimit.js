const findUser = require("../lib/user/findUser")
const User = require("../models/users")
        
const isRequestAllowed = async (user) => {
    try {
        let tempUser = await User.findOne({"_id": user._id})
        tempUser.requestTimeStamp.push(new Date().getTime())
        let isAllwoed = false
        if(tempUser.requestTimeStamp.length <= 30){
            isAllwoed = true
        } else {
            let lastTime = tempUser.requestTimeStamp.shift()
            if(new Date().getTime()- lastTime < 60*1000){  //less than a minute
                isAllwoed =  false
            } else {
                isAllwoed = true
            }
        }
        await User.findOneAndUpdate({"_id": user._id}, {$set:{requestTimeStamp:tempUser.requestTimeStamp}}, { new: true });
        return isAllwoed
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = isRequestAllowed