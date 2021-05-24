const router = require('express').Router()
let Fix = require('../models/fix.model')

router.route('/:id').get((req, res) => {
  Fix.find({car_id: req.params.id})
    .then(fix => res.json(fix))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const id = req.body.id
  const car_id = req.body.car_id
  const price = 23
  const start_date = req.body.start_date

  const newFix = new Fix({
    id,
    car_id,
    price,
    start_date
  })

  newFix.save()
  .then(() => res.json('New fix has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
