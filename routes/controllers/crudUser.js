const User = require('../../model/userSchema');

// Get a User controller
const getUser = async (req, res) => {
    const userId = req.params.userId
    
    const user = await User.findOne({ _id: userId })
    if (user) {
        res.status(200).json({message:{_id:user._id,username:user.username,email:user.email,profilePicture:user.profilePicture}})
    } else {
        res.status(400).json({error:"User is not found."})
    }
}

// Get All User controller
const getUsers = async (req, res) => {
   
    try {
        const users = await User.find()
        
        if (users) {
            res.status(200).json({message:users.map(user=>new Object({_id:user._id,username:user.username,email:user.email,profilePicture:user.profilePicture}))})
        } else {
            res.status(400).json({error:"Users are not found."})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
   
}

module.exports={getUser,getUsers}