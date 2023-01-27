const mongoose = require('mongoose')

const mongoConnect = () => {
  const dbUser = process.env.DB_USER
  const dbPassword = process.env.DB_PASS

  mongoose.set('strictQuery', true)

  return mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.lrjsbbk.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports = { mongoConnect }
