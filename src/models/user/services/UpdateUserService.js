const UserRepository = require('../repositories/UserRepository')

class UpdateUserService {
  async updateUser (updateUserDTO) {
    return await UserRepository.updateUser(updateUserDTO)
  }
}

module.exports = new UpdateUserService()
