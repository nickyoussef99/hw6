/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import QuestionPreview from './QuestionPreview'

const QuestionList = ({ questions, setViewQuestion }) => (
  <div>
    <br />
    <ListGroup>
      {questions.map(question => (
        <ListGroup.Item
          action
          key={question._id}
          onClick={() => setViewQuestion(question)}
        >
          {question.questionText}
        </ListGroup.Item>
      ))}
    </ListGroup>
    <br />
  </div>
)

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  setViewQuestion: PropTypes.func.isRequired,
}

export default QuestionList
