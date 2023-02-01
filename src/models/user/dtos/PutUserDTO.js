class PutUserDTO {
  name = ''
  paramEmail
  email = ''
  password = ''

  constructor (props) {
    if (props) {
      Object.assign(this, props)
    }
  }
}
module.exports = { PutUserDTO }
