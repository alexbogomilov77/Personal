const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PartSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  problem_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String
  }
})

const Part = mongoose.model('Part', PartSchema)

module.exports = Part
