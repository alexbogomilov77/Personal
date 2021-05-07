const router = require('express').Router()
let Problem = require('../models/problem.model')

router.route('/:id').get((req, res) => {
  Problem.find({repair_id: req.params.id})
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const id = req.body.id 
  const repair_id = req.body.repair_id 
  const name = req.body.name
  
  const newProblem = new Problem({
    id,
    repair_id,
    name
  })

  newProblem.save()
  .then(() => res.json('New problem has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
