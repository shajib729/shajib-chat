const { body, validationResult } = require('express-validator');
const User = require('../../model/userSchema');
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')

// registration validation 
const registrationValidation = [
    body('username').trim().not().isEmpty().withMessage("Username is required"),
    body('email').trim().not().isEmpty().withMessage("Email is required").isEmail().withMessage("Not a valid Email"),
    body("password").trim().not().isEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must greater than or equal 6 character"),
    body('cpassword').trim().not().isEmpty().withMessage("Confirm Password is required").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Confirm password doesn't match")
        }
        return true
    })
]

// Registration Controller
const registration = async (req, res) => {
    // console.log(req.body);
    let { username, email, password, profilePicture } = req.body
    
    const error = validationResult(req)
    
    if (!error.isEmpty()) {
        res.status(400).json({error:error.formatWith(err=>err.msg).mapped()})    
    } else {
        try {
            const userExist = await User.findOne({ $or: [{ email: email }, { username: username }] })
            
            if (userExist) {
                res.status(400).json({error:"Email and Username is taken. Try other!"})    
            } else {
                password = await bcrypt.hash(password, 10)
                
                // If there is a Profile Picture 
                if (profilePicture) {
                    const user = await User.create({ username, email, password, profilePicture })
                        
                    if (user) {
                        const token = await jwt.sign({ _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture },process.env.SECRET_KEY,{expiresIn:'7d'})
                        
                        res.cookie('jwtoken', token)
                    
                        res.status(200).json({ message: "Registration Successful", token })
                    }
                } else {
                    const user = await User.create({ username, email, password })
                    
                    if (user) {
                        const token = await jwt.sign({ _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture },process.env.SECRET_KEY,{expiresIn:'7d'})
                        
                        res.cookie('jwtoken', token)
                    
                        res.status(200).json({ message: "Registration Successful", token })
                    }
                }

            }
        } catch (err) {
            res.status(500).json({error:err.message})
        }
    }

}

module.exports={registration,registrationValidation}