const express = require('express')
const { connect } = require('mongoose')
const app = express()
const users = require('./routes/api/users')
const reviews = require('./routes/api/reviews')
const animals = require('./routes/api/animals')
const auth = require('./routes/api/auth')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use Routes
app.use('/api/users', users)
app.use('/api/reviews', reviews)
app.use('/api/animals', animals)
app.use('/api/auth', auth)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  // Any request we get except the above route, will load the front-end
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(process.env.DB)
    console.log('connected to database')
    app.listen(process.env.PORT || 5000, () => {
      console.log('connect to server')
    })
  } catch (err) {
    console.log(err.message)
  }
}

start()
