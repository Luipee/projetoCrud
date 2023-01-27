const { UserRegisterDTO } = require('../dtos/UserRegisterDTO')
const CreateUserService = require('../services/CreateUserService')
const { UserCreationValidator } = require('../validators/UserCreationValidation')
const { LoginUserDTO } = require('../dtos/LoginUserDTO')
const { UserLoginValidator } = require('../validators/UserLoginValidation')
const { loginUser } = require('../services/LoginUserService')

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
        return res.status(400).send('Invalid Request')
      }
      const newLoginUserDTO = new LoginUserDTO(req.body)
      await LoginUserService.loginUser(loginUser)
    } catch (error) {

    }
  }
}

module.exports = new UserController()
