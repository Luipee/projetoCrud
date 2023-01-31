
const UserRepository = require('../repositories/UserRepository')

class GetUserService {
  async getAllUser (GetUserDTO) {
    return await UserRepository.getAllUser(GetUserDTO)
  }
}

module.exports = new GetUserService()
