/* eslint-disable linebreak-style */
const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')
const AccountRouter = require('./routes/account')
const ApiRouter = require('./routes/api')

const app = express()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hw6'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['nick'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
)

app.use('/account', AccountRouter)
app.use('/api', ApiRouter)

app.use((err, req, res, next) => {
  res.status(500)
  res.send('There was an error!')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
