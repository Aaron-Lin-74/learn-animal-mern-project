const express = require('express')
const router = express.Router()
const Animal = require('../../models/animal')
const authenticateToken = require('../../middleware/authenticateToken')
const DEFAULT_LIMIT_NUMBER = 9

// Find animals from database with criterias
async function getAnimals(type, name, limitNum) {
  let animals
  // If url has search query, find the animals which name contains the search term
  if (name) {
    animals = await Animal.find({
      type: type,
      name: { $regex: `${name}`, $options: 'i' },
    }).limit(limitNum)
  } else {
    animals = await Animal.find({ type: type }).limit(limitNum)
  }
  return animals
}

// @route GET api/animals/mammal?limit=3&search=name
// @desc Get limit number of mammal animals
// @access Public
router.get('/mammal', async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('mammal', name, limitNum)
    res.json(animals)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/bird?limit=3
// @desc Get limit number of bird animals
// @access Public
router.get('/bird', async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('bird', name, limitNum)
    res.json(animals)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/reptile?limit=3
// @desc Get limit number of reptile animals
// @access Private
router.get('/reptile', authenticateToken, async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('reptile', name, limitNum)
    res.json(animals)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/fish?limit=3
// @desc Get limit number of fish animals
// @access Private
router.get('/fish', authenticateToken, async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('fish', name, limitNum)
    res.json(animals)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/amphibian?limit=3
// @desc Get limit number of amphibian animals
// @access Private
router.get('/amphibian', authenticateToken, async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('amphibian', name, limitNum)
    res.json(animals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/invertebrate?limit=3
// @desc Get limit number of invertebrate animals
// @access Private
router.get('/invertebrate', authenticateToken, async (req, res) => {
  const limitNum = Number(req.query.limit) || DEFAULT_LIMIT_NUMBER
  const name = req.query.search
  let animals
  try {
    animals = await getAnimals('invertebrate', name, limitNum)
    res.json(animals)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})

// @route GET api/animals/animal/:id
// @desc Get certain animal detail by id
// @access Public
router.get('/animal/:id', async (req, res) => {
  let animal
  try {
    animal = await Animal.findById(req.params.id)
    res.json(animal)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err.message })
  }
})
module.exports = router
