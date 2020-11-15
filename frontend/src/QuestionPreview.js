/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'

const QuestionPreview = ({ text }) => (
  <div>
    <h5>{text}</h5>
  </div>
)

QuestionPreview.propTypes = {
  text: PropTypes.string.isRequired,
}

export default QuestionPreview
