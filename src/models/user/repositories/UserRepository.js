const User = require('../entities/User')

class UserRepository {
  async saveUser (newUserDTO) {
    const newUser = new User(newUserDTO)
    await newUser.save()
  }
}

module.exports = new UserRepository()
