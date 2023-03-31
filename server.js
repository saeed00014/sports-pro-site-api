require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cardRoutes = require('./routes/cards')
const connectDB = require('./connection/dbconn')
const PORT = process.env.PORT || 4000

connectDB()

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


mongoose.connection.once('open', () => {
  mongoose.set("strictQuery", false)
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})