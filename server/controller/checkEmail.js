const User = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        const {email} = request.body

        const checkEmail = await User.findOne({email}).select("-password")

        if(!checkEmail){
            return response.status(400).json({
                message : "user not exist",
                error : true
            })
        }
        return response.status(200).json({
            message : "email verify",
            success : true,
            data : checkEmail
        })

    } catch (error) {
        return response.error.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports =checkEmail