const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true
  },
  birth: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Form', formSchema)