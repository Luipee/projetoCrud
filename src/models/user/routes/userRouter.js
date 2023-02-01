const express = require('express')
const UserController = require('../controller/UserController')
const userRouter = express.Router()

userRouter.post('/user', UserController.createUser)
userRouter.get('/login', UserController.authLogin)
userRouter.delete('/user', UserController.deleteUser)
userRouter.get('/user/', UserController.getUserByEmail)
userRouter.get('/user/all', UserController.getAllUser)
userRouter.patch('/user/', UserController.updateUserByEmail)
userRouter.put('/user/', UserController.putUserByEmail)

module.exports = userRouter
