const express = require('express');
const router = express.Router()
const { login, loginValidation } = require('./controllers/login')
const { registration, registrationValidation } = require('./controllers/registration');
const {getUser,getUsers,deleteUser, addProfileImage,test} =require("./controllers/crudUser")
const userAuth=require("../middlewere/authUser")

// User Registration
router.post('/registration',registrationValidation , registration)

// User Login
router.post('/login', loginValidation, login)

// Get A User
router.get("/user/:userId", userAuth, getUser)

// Get All User
router.get("/users", userAuth, getUsers)

// Delete user's accout
router.delete("/deleteaccount", userAuth, deleteUser)

// Add User profile image
router.patch("/user/profilpicture", userAuth, test, addProfileImage)


module.exports=router