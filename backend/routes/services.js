const router = require('express').Router()
let Service = require('../models/service.model')

router.route('/:id').get((req, res) => {
  Service.find({repair_id: req.params.id})
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const repair_id = req.body.repair_id 
  const title = req.body.title
  
  const newService = new Service({
    repair_id,
    title
  })

  newService.save()
  .then(() => res.json('New service has been added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
