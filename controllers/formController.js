const Forms = require('../models/formModel')

const getForms = async (req, res) => {
  const forms = await Forms.find({})

  res.status(200).json(forms)
}

const getForm = async (req, res) => {
  const { id } = req.params

  const form = await Forms.findById({})

  res.status(200).json(form)
}

const postForm = (req, res) => {
  const {username, email, birth, password} = req.body

  const form = Forms.create({username, email, birth, password})

  res.status(200).json(form)
}

module.exports = {
  getForms,
  getForm,
  postForm
}