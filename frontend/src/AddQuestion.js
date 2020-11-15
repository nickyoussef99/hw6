/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quote-props */
import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import axios from 'axios'

const AddQuestion = ({ show, onHide }) => {
  const [questionText, setQuestionText] = useState('')
  const getUser = async () => {
    const res = await axios.get('account/getUser')
    const { data } = res
    return data
  }
  const addQuestion = async () => {
    const author = await getUser()
    const answer = ' '
    // eslint-disable-next-line quotes
    const req = { answer, author, questionText }
    const res = await axios.post('/api/questions/add', req)
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="addQuestion">
            <Form.Label>Question:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={e => setQuestionText(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Cancel</Button>
        <Button variant="success" onClick={addQuestion}>Add Question</Button>
      </Modal.Footer>
    </Modal>
  )
}

AddQuestion.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default AddQuestion
