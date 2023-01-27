const UserLoginRepository = require('../entities/User')

class LoginUserService {
  async loginUser (newLoginUser) {
    newLoginUser.password = '!@!$@3123123'
    UserLoginRepository.saveUser(newLoginUser)
  }
}

module.exports = new LoginUserService()
