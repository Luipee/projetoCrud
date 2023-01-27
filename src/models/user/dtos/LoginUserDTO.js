class LoginUserDTO {
  email
  password

  constructor (props) {
    if (props) {
      Object.assign(this, props)
    }
  }
}

module.exports = { LoginUserDTO }
