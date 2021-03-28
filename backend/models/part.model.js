const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PartSchema = new Schema({
  action_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String
  }
})

const Part = mongoose.model('Part', PartSchema)

module.exports = Part
