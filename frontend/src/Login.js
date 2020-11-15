/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const login = async () => {
    const res = await axios.post('/account/login', { username, password })
    const { status, data } = res
    if (status === 200 && !data.includes('Failed')) {
      history.push('/')
    } else {
      window.alert('Log in failed')
    }
  }

  return (
    <div>
      <h1>Log In</h1>
      <h4>Username:</h4>
      <input onChange={e => setUsername(e.target.value)} />
      <h4>Password:</h4>
      <input onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit" onClick={() => login(username, password)}> Log in </button>
      <br />
      <p>Don&apos;t have an account?</p>
      {' '}
      <Link to="/signup">Sign up here!</Link>
    </div>
  )
}

export default Login
