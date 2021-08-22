const mongoose = require("mongoose")

const UserSchema =new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default:"../images/noAvatar.png"
    }

},
{
    timestamps:true
})

const User =mongoose.model("User", UserSchema)

module.exports=User