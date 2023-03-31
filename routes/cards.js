const express = require('express')
const {
  getCards, 
  getCard, 
  createCard, 
  deleteCard, 
  updateCard
} = require('../controllers/cardController')

const router = express.Router()

// GET all workouts
router.get('/', getCards)

// GET a single workout
router.get('/:id', getCard)

// POST a new workout
router.post('/', createCard)

// DELETE a workout
router.delete('/:id', deleteCard)

// UPDATE a workout
router.patch('/:id', updateCard)

module.exports = router