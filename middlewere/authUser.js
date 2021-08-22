const User = require("../model/userSchema")
const jwt=require("jsonwebtoken")

const authUser = async (req, res, next) => {
    try {
        const token = jwt.verify(req.cookies.jwtoken, process.env.SECRET_KEY)
        
        if (!token) {
            res.status(400).json({error:"Denied to access! Please Login Again."})
        } else {
            req.userId = token._id
            req.rootUser = token
            req.token = req.cookies.jwtoken

            next()
        }
    } catch (err) {
        res.status(400).json({error:"Denied to access! Please Login Again.",error:err.message})
    }
}

module.exports=authUser