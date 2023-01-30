const UserRepository = require('../repositories/UserRepository')
const bcrypt = require('bcrypt')
const { BcryptSalt } = require('../shared/BcryptSalt')

class LoginUserService {
  async loginUser (newLoginUser) {
    newLoginUser.password = await bcrypt.hash(newLoginUser.password, BcryptSalt)
    const existentUser = await UserRepository.getUser({ email: newLoginUser.email, password: newLoginUser.password })

    if (existentUser) {
      return
    }

    throw Error('Invalid user information')
  }
}

module.exports = new LoginUserService()
