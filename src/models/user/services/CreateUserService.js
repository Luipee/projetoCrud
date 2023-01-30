const UserRepository = require('../repositories/UserRepository')
const bcrypt = require('bcrypt')
const { BcryptSalt } = require('../shared/BcryptSalt')

class CreateUserService {
  async addUser (newUserDTO) {
    newUserDTO.password = await bcrypt.hash(newUserDTO.password, BcryptSalt)
    UserRepository.saveUser(newUserDTO)
  }
}

module.exports = new CreateUserService()
