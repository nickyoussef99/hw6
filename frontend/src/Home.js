/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {
  Button, Container, Col, Row,
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import QuestionList from './QuestionList'
import QuestionView from './QuestionView'
import AddQuestion from './AddQuestion'

const Home = ({ isLoggedIn, getUser, loggedIn }) => {
  const [questions, setQuestions] = useState([])
  const [viewQuestion, setViewQuestion] = useState({})
  const [modalShow, setModalShow] = useState(false)

  const updateViewQuestion = question => {
    if (question) {
      setViewQuestion(question)
    }
  }

  const getQuestions = async () => {
    const res = await axios.get('/api/questions')
    const { data } = res
    setQuestions(data)
    /*
    if (data && data.length > 0 && !viewQuestion.author) {
      updateViewQuestion(data[0])
    } */
  }

  const getButton = () => {
    const history = useHistory()
    if (loggedIn) {
      return (
        <Button type="submit" variant="primary" onClick={() => setModalShow(true)}>Add a new question</Button>
      )
    }
    return (
      <Button type="submit" variant="primary" onClick={() => history.push('/login')}> Log in to add a question </Button>
    )
  }

  useEffect(() => {
    getQuestions()
    isLoggedIn()
    getUser()
    const intervalID = setInterval(() => {
      getQuestions()
    }, 2000)
    // return a clean-up function so that the repetition can be stopped
    // when the component is unmounted
    return () => clearInterval(intervalID)
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>Home</h1>
          {getButton()}
          <AddQuestion show={modalShow} onHide={() => setModalShow(false)} />
          <QuestionList questions={questions} setViewQuestion={setViewQuestion} />
        </Col>
        <Col>
          <QuestionView
            question={viewQuestion}
            loggedIn={loggedIn}
            updateViewQuestion={updateViewQuestion}
          />
        </Col>
      </Row>
    </Container>
  )
}

Home.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
}

export default Home
