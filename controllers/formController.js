const Forms = require('../models/formModel')

const getForms = async (req, res) => {
  const forms = await Forms.find({})

  res.status(200).json(forms)
}

const getForm = async (req, res) => {
  const { id } = req.params

  const form = await Forms.findById(id)

  res.status(200).json(form)
}

const postForm = (req, res) => {
  const {username, email, birth, password, text} = req.body

  const form = Forms.create({username, email, birth, password, text})

  res.status(200).json(form)
}

const deleteForm = async (req, res) => {
  const { id } = req.params

  const form = await Forms.findOneAndDelete({_id: id})

  console.log('deleted')
  res.send(form)
}

module.exports = {
  getForms,
  getForm,
  postForm,
  deleteForm
}