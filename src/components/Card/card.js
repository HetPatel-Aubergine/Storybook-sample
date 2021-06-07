import React from "react"
import PropTypes from 'prop-types';
import "./card.scss";

const Card = ({title, description, primary}) => {
  return (
    <div className={["card", primary ? "card-primary" : ''].join(" ")}>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  /**
   * This is the title of the card
   */
  title: PropTypes.string,
  /**
   * Description of the card
   */
  description: PropTypes.string.isRequired,
  /**
   * Change card background and font color to according primary
   */
  primary: PropTypes.bool
}

Card.defaultProps = {
  primary: false
}

export default Card;