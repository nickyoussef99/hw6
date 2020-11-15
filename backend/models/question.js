/* eslint-disable linebreak-style */
const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  answer: { type: String, required: true },
  author: { type: String, required: true },
})

module.exports = model('Question', questionSchema)
