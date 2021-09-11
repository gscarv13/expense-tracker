import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import './Balance.css';
import Card from '../UI/Card';

const Balance = ({ expenses }) => {
  const totalIncome = 6500;
  const totalExpense = Math.round(expenses.reduce((sum, expense) => sum + expense.amount, 0));
  const balance = totalIncome - totalExpense;
  return (
    <Card className="balance">
      <div>
        <p>total balance</p>
        <p className="balance__total">$ {balance}</p>
      </div>
      <div className="balance__details">
        <div className="balance__change">
          <Icon icon="whh:arrowup" style={{ color: '#78DD59' }} />
          <div>
            <p>income</p>
            <p>${totalIncome}</p>
          </div>
        </div>
        <div className="balance__change">
          <Icon icon="whh:arrowdown" style={{ color: '#f05d64' }} />
          <div>
            <p>expense</p>
            <p>
              $
              {totalExpense}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

Balance.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Balance;
