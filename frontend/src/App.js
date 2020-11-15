/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import axios from 'axios'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Header from './Header'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  const isLoggedIn = async () => {
    const res = await axios.get('/account/isloggedin')
    const { data } = res
    setLoggedIn(data)
    return loggedIn
  }

  const getUser = async () => {
    const res = await axios.get('account/getUser')
    const { data } = res
    setUser(data)
  }

  isLoggedIn()
  getUser()

  useEffect(() => {
    isLoggedIn()
    getUser()
  }, [])

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} loggedIn={loggedIn} user={user} />
        <Switch>
          <Route exact path="/">
            <Home isLoggedIn={isLoggedIn} getUser={getUser} loggedIn={loggedIn} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
