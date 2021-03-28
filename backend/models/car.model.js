const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
  status: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  plate: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  engine: {
    type: String
  }
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
