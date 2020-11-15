/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const QuestionView = ({ loggedIn, question, updateViewQuestion }) => {
  const { questionText, author, _id } = question
  const { answer } = question
  const [answerText, setAnswerText] = useState('')
  const answerQuestion = async a => {
    const res = await axios.post('/api/questions/answer', { _id, answer: a })
    const { status, data } = res
    if (status === 200) {
      updateViewQuestion(data)
    }
  }

  return (
    <div>
      <div>
        <h2>{questionText}</h2>
        <h5>Author: </h5>
        <h5>{author}</h5>
        <h5>Answer: </h5>
        <h5>{answer}</h5>
      </div>
      {loggedIn
      && (
      <div>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer this question:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => setAnswerText(e.target.value)} />
        </Form.Group>
        <Button variant="success" type="submit" onClick={e => answerQuestion(answerText)}>
          Submit Answer
        </Button>
      </div>
      )}
    </div>
  )
}

QuestionView.propTypes = {
  question: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  updateViewQuestion: PropTypes.func.isRequired,
}

export default QuestionView
