const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userCreationSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
  confirmPassword: Joi.ref('password')
})

exports.UserCreationValidator = validator(userCreationSchema)
