const router = require('express').Router()
const Conversation = require("../model/conversationSchema")
const userAuth=require("../middlewere/authUser")
const {createConversation,getConversation} = require("./controllers/Conversation")

// Create A new Conversation 
router.post('/conversation', userAuth, createConversation)

// Get A Conversation of A User by his _id
router.get("/conversation/:userId",userAuth, getConversation)

module.exports=router