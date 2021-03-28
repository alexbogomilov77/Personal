const router = require('express').Router()
let Action = require('../models/action.model')

router.route('/:id').get((req, res) => {
  Action.find({service_id: req.params.id})
    .then(action => res.json(action))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const service_id = req.body.service_id
  const title = req.body.title
  const price = req.body.price
  
  const newAction = new Action({
    service_id,
    title,
    price
  })

  newAction.save()
  .then(() => res.json('New action has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
