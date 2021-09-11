import React from 'react';
import PropTypes from 'prop-types';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const localeLang = navigator.language;
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat(localeLang, options).format(date);
  return <p className="expense-date">{formattedDate}</p>;
};

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;
