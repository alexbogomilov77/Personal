const router = require('express').Router()
let Part = require('../models/part.model')

router.route('/:id').get((req, res) => {
  Part.find({problem_id: req.params.id})
    .then(part => res.json(part))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const id = req.body.id
  const problem_id = req.body.problem_id
  const name = req.body.name
  const price = req.body.price
  
  const newPart = new Part({
    id,
    problem_id,
    name,
    price
  })

  newPart.save()
  .then(() => res.json('New part has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
  Part.deleteOne({id: req.params.id})
  .then(() => res.json('part has been deleted!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
