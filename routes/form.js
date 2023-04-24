const express = require('express')

const {
  getForms,
  getForm,
  postForm,
  deleteForm
} = require('../controllers/formController')

const router = express.Router()

router.get('/', getForms)

router.get('/:id', getForm)

router.post('/', postForm)

router.delete('/:id', deleteForm)

module.exports = router


