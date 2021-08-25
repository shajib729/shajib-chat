const path = require("path")
const jwt=require('jsonwebtoken')

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

// Get All User controller
const deleteUser = async (req, res) => {
   
    try {
        const users = await User.findByIdAndDelete(req.userId)
        
        if (users) {
            
            res.status(200).json({ message: "Delted Account", users })
        } else {
            res.status(400).json({error:"User is not found."})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
   
}

// Updata User's Profile Image controller
const addProfileImage = async (req, res) => {
   
    try {

        if (req.body.img) {
            const user = await User.findByIdAndUpdate(req.userId, { profilePicture: req.body.img })
            if (user) {
                const token = await jwt.sign({ _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture },process.env.SECRET_KEY,{expiresIn:'7d'})
                    
                res.cookie('jwtoken', token)
                
                res.status(200).json({message:"Image uploaded successfully",userProfile:user.profilePicture})
            } else {
                res.status(400).json({error:"Failed to Upload Image"})
            }
        }

    } catch (err) {
        res.status(400).json({error:err.message})
    }
   
}

const test = (req, res, next) => {

    if (req.files) {

        let sampleFile = req.files.image
        // console.log(sampleFile);
        
        let fileName =[Date.now().toString(), sampleFile.mimetype.split('/')[1]].join('.')
        uploadPath = path.join(__dirname , '../../my-app/public/images/' , fileName);

        // Use the mv() method to place the file somewhere on your server//TODO:
        sampleFile.mv(uploadPath)        
        req.body.img = "../images/" + fileName
        // console.log(req.body.img);
        next()

    } else {
       res.send("Didn't get image")
    }
    
}

module.exports={getUser,getUsers,deleteUser,addProfileImage,test}