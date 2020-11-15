/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signup = async () => {
    const res = await axios.post('/account/signup', { username, password })
    const { status, data } = res
    if (status === 200 && !data.includes('Failed')) {
      history.push('/')
    } else {
      window.alert('Sign up failed')
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <h4>Username:</h4>
      <input onChange={e => setUsername(e.target.value)} />
      <h4>Password:</h4>
      <input onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit" onClick={() => signup(username, password)}> Sign up! </button>
      <br />
      <p>Already have an account? </p>
      {' '}
      <Link to="/login">Log in here!</Link>
    </div>
  )
}

export default Signup
