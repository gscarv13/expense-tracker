import React from 'react';
import PropTypes from 'prop-types';
import './GridContainer.css';

const GridContainer = ({ className, children }) => {
  const classes = `grid-container ${className}`;
  return <div className={classes}>{children}</div>;
};

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

GridContainer.defaultProps = {
  className: '',
};

export default GridContainer;
