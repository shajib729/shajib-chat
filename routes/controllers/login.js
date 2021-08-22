const {body,validationResult} = require('express-validator');
const User = require('../../model/userSchema');
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')

// Login validation 
const loginValidation = [
    body('email').trim().not().isEmpty().withMessage("Email is required").isEmail().withMessage("Not a valid Email"),
    body("password").trim().not().isEmpty().withMessage("Password is required")
]

// Login Controller
const login =async (req, res) => {
    const error = validationResult(req)
    
    if (!error.isEmpty()) {
        res.status(400).json({error:error.formatWith(err=>err.msg).mapped()})    
    } else {
        try {
            const user = await User.findOne({ email: req.body.email })
            
            if (!user) {
                res.status(400).json({error:"There are no accounts with this Email"})    
            } else {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)
                if (passwordMatch) {                    
                    const token = await jwt.sign({ _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture }, process.env.SECRET_KEY, { expiresIn: "7d" })

                    res.cookie('jwtoken', token)
                    
                    res.status(200).json({message:"Login Successful",token})    
                } else {
                    res.status(400).json({error:"Wrong Info"})    
                }              
            }
        } catch (err) {
            res.status(500).json({error:err.message})
        }
    }
}

module.exports={login, loginValidation}