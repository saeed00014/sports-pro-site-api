require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cardRoutes = require('./routes/cards')

const url = process.env.MONGO_URL
const PORT = process.env.PORT

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

mongoose.set("strictQuery", false);
// connect to db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('connected to database')
  // listen to port
  app.listen(PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
  })
})
.catch((err) => {
  console.log(err)
}) 