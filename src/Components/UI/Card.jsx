import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string.isRequired,
};
export default Card;
