import React from 'react'
import './header.css'
import PropTypes from 'prop-types'

export default function Header ({ children }) {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers: 23, 004</p>
              <hr></hr>
            </div>
            {children}
          </div>
        </div>
      </header>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node
}
