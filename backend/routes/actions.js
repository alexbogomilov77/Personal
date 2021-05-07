const router = require('express').Router()
let Action = require('../models/action.model')

router.route('/:id').get((req, res) => {
  Action.find({problem_id: req.params.id})
    .then(action => res.json(action))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const id = req.body.id
  const problem_id = req.body.problem_id
  const name = req.body.name
  const price = req.body.price
  
  const newAction = new Action({
    id,
    problem_id,
    name,
    price
  })

  newAction.save()
  .then(() => res.json('New action has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
  Action.deleteOne({id: req.params.id})
  .then(() => res.json('action has been deleted!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
