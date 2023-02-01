
const { DeleteUserDTO } = require('../dtos/DeleteUserDTO')
const { GetUserDTO } = require('../dtos/GetUserDTO')
const { PutUserDTO } = require('../dtos/PutUserDTO')
const { UpdateUserDTO } = require('../dtos/UpdateUserDTO')
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

  async deleteUser (deleteUserDTO) {
    const userDelete = await User.findOneAndDelete({ email: deleteUserDTO.email })

    return new DeleteUserDTO(userDelete)
  }

  async getUserByEmail (getUserDTO) {
    const getUser = await User.find({ email: getUserDTO.email })

    return new GetUserDTO(getUser)
  }

  async getAllUser () {
    const getAllUser = await User.find()
    const getUserDTOs = getAllUser.map(user => new GetUserDTO(user))

    return getUserDTOs
  }

  async updateUser (updateUserDTO) {
    const { paramEmail, ...userData } = updateUserDTO
    const updateUser = await User.findOneAndUpdate({ email: paramEmail }, userData, { new: true })
    return new UpdateUserDTO(updateUser)
  }

  async putUser (putUserDTO) {
    const { paramEmail, ...userData } = putUserDTO
    const putUser = await User.findOneAndUpdate({ email: paramEmail }, userData, { new: true })
    return new PutUserDTO(putUser)
  }
}
module.exports = new UserRepository()
