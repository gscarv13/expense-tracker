import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import './ExpenseIcon.css';

const ExpenseIcon = ({ iconName, bgColor }) => (
  <div className="expense-icon" style={{ background: bgColor }}>
    <Icon icon={iconName} width="20" height="20" />
  </div>
);

ExpenseIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ExpenseIcon;
