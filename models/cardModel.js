const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  dis: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Card', cardSchema)