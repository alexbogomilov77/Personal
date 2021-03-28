const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  repair_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const Service = mongoose.model('Service', ServiceSchema)

module.exports = Service
