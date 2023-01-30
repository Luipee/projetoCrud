const express = require('express')
const UserController = require('../controller/UserController')
const userRouter = express.Router()

userRouter.post('/user', UserController.createUser)
userRouter.get('/login', UserController.authLogin)
userRouter.delete('/delete', UserController.deleteUser)

module.exports = userRouter
