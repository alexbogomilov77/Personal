const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProblemSchema = new Schema({
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

const Problem = mongoose.model('Problem', ProblemSchema)

module.exports = Problem
