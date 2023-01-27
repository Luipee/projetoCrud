const UserRepository = require('../repositories/UserRepository')

class CreateUserService {
  async addUser (newUserDTO) {
    newUserDTO.password = '!@!$@3123123'
    UserRepository.saveUser(newUserDTO)
  }
}

module.exports = new CreateUserService()
