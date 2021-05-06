const router = require('express').Router()
let Service = require('../models/service.model')

router.route('/:id').get((req, res) => {
  Service.find({repair_id: req.params.id})
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const id = req.body.id 
  const repair_id = req.body.repair_id 
  const name = req.body.name
  
  const newService = new Service({
    id,
    repair_id,
    name
  })

  newService.save()
  .then(() => res.json('New service has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
