const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActionSchema = new Schema({
  service_id: {
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

const Action = mongoose.model('Action', ActionSchema)

module.exports = Action
