const express = require('express')
const UserController = require('../controller/UserController')
const userRouter = express.Router()

userRouter.post('/user', UserController.createUser)
userRouter.get('/login', UserController.authLogin)

module.exports = userRouter
