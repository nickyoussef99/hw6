/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
const express = require('express')
const isAuthenticated = require('../middlewares/isAuthenticated')

const Question = require('../models/question')

const router = express.Router()

router.get('/questions/', (req, res, next) => {
  Question.find({}, (err, questions) => {
    if (err) {
      next(err)
    } else {
      res.send(questions)
    }
  })
})

router.post('/questions/add', isAuthenticated, async (req, res) => {
  const { answer, author, questionText } = req.body
  try {
    await Question.create({ questionText, answer, author })
    res.send('Successfully added question')
  } catch {
    res.send('Error adding question')
  }
})

router.post('/questions/answer', isAuthenticated, async (req, res, next) => {
  const { _id, answer } = req.body
  await Question.findByIdAndUpdate(_id, { $set: { answer } }, (err, question) => {
    if (err) {
      next(err)
    } else {
      question.answer = answer
      res.send(question)
    }
  })
})

module.exports = router
