class UserRegisterDTO {
  name
  email
  password
  confirmPassword

  constructor (props) {
    if (props) {
      Object.assign(this, props)
    }
  }
}
module.exports = { UserRegisterDTO }
