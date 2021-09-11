import React from 'react';
import PropTypes from 'prop-types';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { iconColors, iconNames } from '../../Constants/iconsInfo';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            iconName={iconNames[item.category]}
            bgColor={iconColors[item.category]}
          />
        ))
      }
    </ul>
  );
};

ExpensesList.propTypes = {
  filteredExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExpensesList;
