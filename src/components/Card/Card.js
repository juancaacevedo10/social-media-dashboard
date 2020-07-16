import React from 'react'
import './card.css'
import PropTypes from 'prop-types'

export default function Card ({ username, followers, todayFollowers, icon, name }) {
  return (
    <article className={`card ${name}`}>
      <p className="card-title">
        <img src={icon} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {todayFollowers} Today
      </p>
    </article>
  )
}

Card.propTypes = {
  username: PropTypes.string,
  followers: PropTypes.string,
  todayFollowers: PropTypes.number,
  icon: PropTypes.string,
  name: PropTypes.string
}
