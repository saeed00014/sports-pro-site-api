const express = require('express')

const {
  getForms,
  getForm,
  postForm
} = require('../controllers/formController')

const router = express.Router()

router.get('/', getForms)

router.get('/:id', getForm)

router.post('/', postForm)

module.exports = router


