const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userDeleteSchema = Joi.object({

  email: Joi.string().email().required()

})

exports.UserDeleteValidator = validator(userDeleteSchema)
