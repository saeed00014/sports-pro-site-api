const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  birth: {
    type: String
  },
  password: {
    type: String
  },
  text: {
    type: String
  }
})

module.exports = mongoose.model('Form', formSchema)