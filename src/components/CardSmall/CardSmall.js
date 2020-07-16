import React from 'react'
import './cardSmall.css'
import PropTypes from 'prop-types'

export default function CardSmall ({ growth, pageViews, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="icon-up" />
          {growth}%
        </span>
      </p>
    </div>
  )
}

CardSmall.propTypes = {
  icon: PropTypes.string,
  pageViews: PropTypes.string,
  growth: PropTypes.number
}
