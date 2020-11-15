/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import QuestionList from './QuestionList'
import QuestionView from './QuestionView'
import AddQuestion from './AddQuestion'

const MainScreen = ({ questions, loggedIn }) => {
  const [question, setQuestion] = useState({})
  const [modalShow, setModalShow] = useState(false)

  const getButton = () => {
    const history = useHistory()
    if (loggedIn) {
      return (
        <button type="submit" onClick={() => setModalShow(true)}>Add a new question</button>
      )
    }
    return (
      <button type="submit" onClick={() => history.push('/login')}> Log in to add a question </button>
    )
  }

  return (
    <div>
      {getButton()}
      <AddQuestion show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

MainScreen.propTypes = {
  questions: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,
}

export default MainScreen
