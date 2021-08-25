const router = require('express').Router()
const Conversation = require("../model/conversationSchema")
const userAuth=require("../middlewere/authUser")
const {createConversation,getConversation,deleteConversation,deleteFriendConversation} = require("./controllers/Conversation")

// Create A new Conversation 
router.post('/conversation', userAuth, createConversation)

// Get A Conversation of A User by his _id
router.get("/conversation/:userId",userAuth, getConversation)

// Delete All Conversation of A User by his _id
router.delete("/delete/conversation",userAuth, deleteConversation)

// Delete One Conversation of A User by his friend
router.delete("/delete/friendconversation/:id",userAuth, deleteFriendConversation)

module.exports=router