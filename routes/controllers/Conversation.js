const Conversation = require("../../model/conversationSchema")

// Create A new Conversation Controller
const createConversation = async (req, res) => {

    try {    
        if (req.body.senderId) {
            const existConversation = await Conversation.findOne({ $and: [{ members: { "$in": [req.userId] } }, { members: { "$in": [req.body.senderId] } }] })
            
            if (!existConversation && (req.userId !== req.body.senderId)) {
                const newConversation = await Conversation.create({ members: [req.body.senderId,req.userId] })
                res.status(200).json({message:newConversation}) 
            } else {
                res.send("Failed to create Conversation")
            }
        } else {
            res.status(400).json({error:"Friend's id is required"})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

// Get A Conversation of A User by his _id Controller
const getConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({ members: { $in: [req.params.userId] } })
        if (conversation) {
            // console.log(conversation);
            res.status(200).json({message:conversation})
        } else {
            res.status(400).json({error:'No conversatiion'})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

// Delete All Conversation of A User by his _id Controller
const deleteConversation = async (req, res) => {
    try {
        const conversation = await Conversation.deleteMany({ members: { $in: [req.userId] } })
        
        if (conversation) {
            res.status(200).json({message:conversation})
        } else {
            res.status(400).json({error:'No conversatiion'})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

// Delete One Conversation of A User by his Friend Controller
const deleteFriendConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOneAndDelete({ $and: [{ members: { "$in": [req.userId] } }, { members: { "$in": [req.params.id] } }] })
        if (conversation) {
            res.status(200).json({message:conversation})
        } else {
            res.status(400).json({error:'No conversatiion'})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


module.exports={createConversation,getConversation,deleteConversation,deleteFriendConversation}