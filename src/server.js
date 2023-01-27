require('dotenv').config()
const express = require('express')
const { mongoConnect } = require('./infra/database/MongoDB')
const userRouter = require('./models/user/routes/userRouter')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).send('API esta ativa')
})

server.use(userRouter)

mongoConnect()
  .then(() => {
    server.listen(3000, () => {
      console.log('API is Running on port 3000 and DB is connected')
    })
  }).catch((err) => console.log(err))
