const express = require('express')
const { connect } = require('mongoose')
require('dotenv').config()
const app = express()
const users = require('./routes/api/users')
const reviews = require('./routes/api/reviews')
const animals = require('./routes/api/animals')
const auth = require('./routes/api/auth')
const subscription = require('./routes/api/subscription')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const serverless = require('serverless-http')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use Routes
app.use('/api/users', users)
app.use('/api/reviews', reviews)
app.use('/api/animals', animals)
app.use('/api/auth', auth)
app.use('/api/subscription', subscription)

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  })
})

async function start() {
  try {
    await mongoose.connect(process.env.DB)
    console.log('connected to database')
  } catch (err) {
    console.log(err.message)
  }
}

start()
module.exports.handler = serverless(app)
