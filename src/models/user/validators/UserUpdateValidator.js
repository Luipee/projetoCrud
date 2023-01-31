const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userUpdateSchema = Joi.object({

  email: Joi.string().email().required()

})

exports.UserUpdateValidator = validator(userUpdateSchema)
