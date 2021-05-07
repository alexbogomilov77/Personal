const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActionSchema = new Schema({
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

const Action = mongoose.model('Action', ActionSchema)

module.exports = Action
