const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FixSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  car_id: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: false
  },
  start_date: {
    type: Date,
    required: true
  }
})

const Fix = mongoose.model('Fix', FixSchema)

module.exports = Fix
