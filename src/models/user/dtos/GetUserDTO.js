class GetUserDTO {
  name
  email
  password

  constructor (props) {
    if (props) {
      Object.assign(this, props)
    }
  }
}

module.exports = { GetUserDTO }
