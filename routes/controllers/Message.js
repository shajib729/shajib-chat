const Message=require("../../model/messageSchema")

// Create a new message controller
const addMessage = async (req, res) => {
    try {
        if (req.body) {
            const newMessage = await Message.create(req.body)
            res.status(200).json({message:newMessage})
        }
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

// Get a message Controller
const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.conversationId })
        res.status(200).json({message:messages})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports={addMessage,getMessage}