const router = require('express').Router()
let Repair = require('../models/repair.model')

router.route('/:id').get((req, res) => {
  Repair.find({car_id: req.params.id})
    .then(repair => res.json(repair))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  console.log('here')
  const car_id = req.body.car_id
  const price = 23
  
  const newRepair = new Repair({
    car_id,
    price
  })

  newRepair.save()
  .then(() => res.json('New repair has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
