require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cardRoutes = require('./routes/cards')
const corsOptions = require('./config/corsOptions')
const cors = require('cors')
const connectDB = require('./config/dbConn')


connectDB()

app.use(cors(corsOptions))

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/cards', cardRoutes)

// connect to db
mongoose.connection.once('open')
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 