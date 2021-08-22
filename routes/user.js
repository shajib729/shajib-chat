const express = require('express');
const router = express.Router()
const { login, loginValidation } = require('./controllers/login')
const { registration, registrationValidation } = require('./controllers/registration');
const {getUser,getUsers} =require("./controllers/crudUser")
const userAuth=require("../middlewere/authUser")

// User Registration
router.post('/registration',registrationValidation , registration)

// User Login
router.post('/login', loginValidation, login)

// Get A User
router.get("/user/:userId", userAuth, getUser)

// Get All User
router.get("/users", userAuth, getUsers)

module.exports=router