const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RepairSchema = new Schema({
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
    default: Date.now
  }
})

const Repair = mongoose.model('Repair', RepairSchema)

module.exports = Repair
