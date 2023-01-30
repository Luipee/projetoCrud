
const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userLoginSchema = Joi.object({

  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required()

})

exports.UserLoginValidator = validator(userLoginSchema)
