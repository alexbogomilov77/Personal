const router = require('express').Router()
let Problem = require('../models/problem.model')

router.route('/:id').get((req, res) => {
  Problem.find({fix_id: req.params.id})
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  console.log(req.body)
  const id = req.body.id 
  const fix_id = req.body.fix_id 
  const name = req.body.name
  
  const newProblem = new Problem({
    id,
    fix_id,
    name
  })

  newProblem.save()
  .then(() => res.json('New problem has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
