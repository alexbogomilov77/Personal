const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  repair_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Service = mongoose.model('Service', ServiceSchema)

module.exports = Service
