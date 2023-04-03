require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cardRoutes = require('./routes/cards')
const formRoutes = require('./routes/form')
const cors = require('cors')

const PORT = process.env.PORT || 10000

// express app
const app = express()

app.use(cors())

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/card', cardRoutes)
app.use('/form', formRoutes)

mongoose.set('strictQuery', false);
// connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log('listening for requests on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 