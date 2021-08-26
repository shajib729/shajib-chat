const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema(
{
    conversationId:{
        type: mongoose.Types.ObjectId,
        ref:'Conversation'
    },
    senderId:{
        type:mongoose.Types.ObjectId,
    },
    text:{
        type:String,
    },
    // seen:{
    //     type: Boolean,
    //     default:false
    // }
},
{
  timestamps:true
}
)

const Message =mongoose.model("Message", MessageSchema)

module.exports=Message