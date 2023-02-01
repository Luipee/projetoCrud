const { UserRegisterDTO } = require('../dtos/UserRegisterDTO')
const CreateUserService = require('../services/CreateUserService')
const { UserCreationValidator } = require('../validators/UserCreationValidation')
const { LoginUserDTO } = require('../dtos/LoginUserDTO')
const { UserLoginValidator } = require('../validators/UserLoginValidation')
const LoginUserService = require('../services/LoginUserService')
const { DeleteUserDTO } = require('../dtos/DeleteUserDTO')
const { UserDeleteValidator } = require('../validators/UserDeleteValidator')
const DeleteUserService = require('../services/DeleteUserService')
const { GetUserDTO } = require('../dtos/GetUserDTO')
const GetUserService = require('../services/GetUserService')
const { UserGetValidator } = require('../validators/UserGetValidator')
const UpdateUserService = require('../services/UpdateUserService')
const { UserUpdateValidator } = require('../validators/UserUpdateValidator')
const { UpdateUserDTO } = require('../dtos/UpdateUserDTO')
const { PutUserDTO } = require('../dtos/PutUserDTO')
const PutUserService = require('../services/PutUserService')
const { UserPutValidator } = require('../validators/UserPutValidator')

class UserController {
  async createUser (req, res) {
    const newUserDTO = new UserRegisterDTO(req.body)
    try {
      const { error } = UserCreationValidator(req.body)

      if (error) {
        return res.status(400).send('Invalid Request')
      }
      await CreateUserService.addUser(newUserDTO)
      res.status(201).send('User Created')
    } catch (error) {
      res.status(500).send('Fail to create user')
    }
  }

  async authLogin (req, res) {
    try {
      const { error } = UserLoginValidator(req.body)
      if (error) {
        return res.status(400).send('Invalid request')
      }
      const newLoginUserDTO = new LoginUserDTO(req.body)
      await LoginUserService.loginUser(newLoginUserDTO)
      res.status(200).send('Login realizado')
    } catch (error) {
      res.status(500).send('Fail to Login')
    }
  }

  async deleteUser (req, res) {
    try {
      const { error } = UserDeleteValidator(req.body)
      if (error) {
        return res.status(400).send('Invalid request')
      }
      const newDeleteUserDTO = new DeleteUserDTO(req.body)
      await DeleteUserService.deleteUser(newDeleteUserDTO)
      res.status(200).send('Usuário excluido com sucesso')
    } catch (error) {
      res.status(500).send('Fail to delete')
    }
  }

  async getUserByEmail (req, res) {
    try {
      const { error } = UserGetValidator(req.query)
      if (error) {
        return res.status(400).send('Invalid Request')
      }

      const newGetUserDTO = new GetUserDTO(req.query)

      const userFound = await GetUserService.getUserByEmail(newGetUserDTO)

      res.status(200).send(userFound)
    } catch (error) {
      res.status(500).send('Fail to Get email')
    }
  }

  async getAllUser (req, res) {
    try {
      const getAllUser = await GetUserService.getAllUser()

      res.status(200).send(getAllUser)
    } catch (error) {
      res.status(500).send('Fail to Get all users')
    }
  }

  async updateUserByEmail (req, res) {
    try {
      const { errorBody } = UserUpdateValidator(req.body)
      const { errorParam } = UserGetValidator(req.query)
      if (errorBody || errorParam) {
        return res.status(400).send('Invalid Request')
      }
      const newUpdateUserDTO = new UpdateUserDTO(req.body)
      newUpdateUserDTO.paramEmail = req.query.email
      const userUpdate = await UpdateUserService.updateUser(newUpdateUserDTO)

      res.status(200).send(userUpdate)
    } catch (error) {
      res.status(500).send('Fail to Get email')
    }
  }

  async putUserByEmail (req, res) {
    try {
      const { errorBody } = UserPutValidator(req.body)
      const { errorParam } = UserGetValidator(req.query)
      if (errorBody || errorParam) {
        return res.status(400).send('Invalid Request')
      }
      const newPutUserDTO = new PutUserDTO(req.body)
      newPutUserDTO.paramEmail = req.query.email
      const userPut = await PutUserService.putUser(newPutUserDTO)
      res.status(200).send(userPut)
    } catch (error) {
      res.status(500).send('Fail to update User')
    }
  }
}
module.exports = new UserController()
