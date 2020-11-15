/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const RightWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Header = ({ isLoggedIn, loggedIn, user }) => {
  const logOut = async () => {
    const res = await axios.post('/account/logout', {})
    const { status, data } = res
    if (status === 200) {
      isLoggedIn()
    } else {
      window.alert('Log out failed')
    }
  }

  return (
    <div>
      <Wrapper>
        <div><h2>Campuswire Lite</h2></div>
        {loggedIn
        && (
        <div>
          <h4>{`${user} is logged in!`}</h4>
          <button onClick={() => logOut()}>Log out</button>
        </div>
        )}
      </Wrapper>
      <hr />
    </div>
  )
}

Header.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
}

export default Header
