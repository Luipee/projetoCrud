const UserRepository = require('../repositories/UserRepository')

class DeleteUserService {
  async deleteUser (deleteUserDTO) {
    UserRepository.deleteUser(deleteUserDTO)
  }
}

module.exports = new DeleteUserService()
