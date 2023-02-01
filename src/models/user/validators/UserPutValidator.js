const Joi = require('@hapi/joi')
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false })

const userPutSchema = Joi.object({

  email: Joi.string().email().required()

})

exports.UserPutValidator = validator(userPutSchema)
