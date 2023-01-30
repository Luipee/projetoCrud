const { UserRegisterDTO } = require('../dtos/UserRegisterDTO')
const CreateUserService = require('../services/CreateUserService')
const { UserCreationValidator } = require('../validators/UserCreationValidation')
const { LoginUserDTO } = require('../dtos/LoginUserDTO')
const { UserLoginValidator } = require('../validators/UserLoginValidation')
const LoginUserService = require('../services/LoginUserService')
const { DeleteUserDTO } = require('../dtos/DeleteUserDTO')
const { UserDeleteValidator } = require('../validators/UserDeleteValidator')

class UserController {
  async createUser (req, res) {
    const newUserDTO = new UserRegisterDTO(req.body)
    try {
      const { error } = UserCreationValidator(req.body)

      if (error) {
        console.log(error)
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
        console.log(error)
        return res.status(400).send('Invalid request')
      }
      const newLoginUserDTO = new LoginUserDTO(req.body)
      await LoginUserService.loginUser(newLoginUserDTO)
      res.status(201).send('Login realizado')
    } catch (error) {
      res.status(500).send('Fail to Login')
    }
  }

  async deleteUser (req, res) {
    try {
      const { error } = UserDeleteValidator(req.body)
      if (error) {
        console.log(error)
        return res.status(400).send('Invalid request')
      }
      const newDeleteUserDTO = new DeleteUserDTO(req.body)
      await DeleteUserDTO.deleteUser(newDeleteUserDTO)
      res.status(201).send('Usuário excluido com sucesso')
    } catch (error) {
      res.status(500).send('Fail to delete')
    }
  }
}

module.exports = new UserController()
