const express = require('express')
const router = express.Router()
const Animal = require('../../models/animal')

// @route   GET api/animals?type=type&limit=3
// @desc    Get limit number of animals of certain type using query string
// @access  Public
router.get('/', async (req, res) => {
  // data transmited over the network is in string type
  const limitNum = Number(req.query.limit) || 3
  let animals
  try {
    animals = await Animal.find({ type: req.query.type }).limit(limitNum)

    res.json(animals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// @route   POST api/animals
// @desc    Create a new animal record in MongoDB
// @access  Private
router.post('/', async (req, res) => {
  const animal = new Animal({ ...req.body })
  try {
    const newAnimal = await animal.save()
    res.status(201).json({ message: 'successfully added' })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err._message })
  }
})

// Update the database to change the animal type from Mammal to mammal, all in lower case
router.patch('/', async (req, res) => {
  const result = await Animal.updateMany({ type: 'Mammal' }, { type: 'mammal' })
  console.log(result.n)
})

module.exports = router
