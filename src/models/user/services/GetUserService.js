
const UserRepository = require('../repositories/UserRepository')

class GetUserService {
  async getAllUser () {
    return await UserRepository.getAllUser()
  }

  async getUserByEmail (GetUserDTO) {
    return await UserRepository.getUserByEmail(GetUserDTO)
  }
}

module.exports = new GetUserService()
