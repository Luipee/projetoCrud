const UserRepository = require('../repositories/UserRepository')

class PutUserService {
  async putUser (putUserDTO) {
    if (putUserDTO.email === '') {
      putUserDTO.email = putUserDTO.paramEmail
    }

    const updatedUser = await UserRepository.putUser(putUserDTO)
    console.log(updatedUser)
    return updatedUser
  }
}

module.exports = new PutUserService()
