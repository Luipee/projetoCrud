const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userGetSchema = Joi.object({

  email: Joi.string().email().required()

})

exports.UserGetValidator = validator(userGetSchema)
