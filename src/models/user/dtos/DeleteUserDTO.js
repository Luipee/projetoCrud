class DeleteUserDTO {
  email
  constructor (props) {
    if (props) {
      Object.assign(this, props)
    }
  }
}

module.exports = { DeleteUserDTO }
