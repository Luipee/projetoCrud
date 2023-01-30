const { findOneAndDelete } = require('../entities/User')
const UserRepository = require('../repositories/UserRepository')

class DeleteUserService {
  async deleteUser (newDeleteUser) {
    newDeleteUser.email = await findOneAndDelete({ newDeleteUser })
  }
}

module.exports = new DeleteUserService()
