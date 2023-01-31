const UserRepository = require('../repositories/UserRepository')

class UpdateUserService {
  async updateAllUser (GetUserDTO) {
    return await UserRepository.updateAllUser(GetUserDTO)
  }
}

module.exports = new UpdateUserService()
