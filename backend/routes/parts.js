const router = require('express').Router()
let Part = require('../models/part.model')

router.route('/:id').get((req, res) => {
  Part.find({service_id: req.params.id})
    .then(part => res.json(part))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const service_id = req.body.service_id
  const title = req.body.title
  const price = req.body.price
  
  const newPart = new Part({
    service_id,
    title,
    price
  })

  newPart.save()
  .then(() => res.json('New part has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
