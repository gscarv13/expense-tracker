import React from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseIcon from './ExpenseIcon';
import './ExpenseItem.css';

const ExpenseItem = ({
  date,
  title,
  amount,
  iconName,
  bgColor,
}) => (
  <li>
    <Card className="expense-item">
      <ExpenseIcon iconName={iconName} bgColor={bgColor} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div>
        <p className="expense-item__price">{`$ ${amount}`}</p>
        <ExpenseDate date={date} />
      </div>
    </Card>
  </li>
);

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ExpenseItem;
