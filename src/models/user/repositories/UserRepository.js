
const GetUserDTO = require('../dtos/GetUserDTO')
const User = require('../entities/User')

class UserRepository {
  async saveUser (newUserDTO) {
    const newUser = new User(newUserDTO)
    await newUser.save()
  }

  async getUser (getUserDTO) {
    const userFound = await User.find({ email: getUserDTO.email, password: getUserDTO.password })

    return new GetUserDTO(userFound)
  }

  async deleteUser (DeleteUserDTO) {
    const userDelete = await User.findOneAndDelete({ email: DeleteUserDTO.email })

    return new DeleteUserDTO(userDelete)
  }
}

module.exports = new UserRepository()
