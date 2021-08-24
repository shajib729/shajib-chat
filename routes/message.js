const router = require('express').Router()
const Message = require("../model/messageSchema")
const userAuth = require("../middlewere/authUser")
const {addMessage,getMessage} = require('./controllers/Message')

// Create a new Message
router.post('/newMessage', userAuth, addMessage)

// Get Message of a Conversation by it's id
router.get('/message/:conversationId', userAuth, getMessage)

module.exports=router