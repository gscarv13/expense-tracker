import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses({ items }) {
  const [selectedYear, setSelectedYear] = useState('2021');

  const handleOnChangeFilter = (selectedYear) => setSelectedYear(selectedYear);
  const filteredExpenses = items.filter((expense) => expense.date.getFullYear().toString() === selectedYear);

  return (
    <>
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={handleOnChangeFilter}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <div className="expenses">
        <ExpensesList filteredExpenses={filteredExpenses} />
      </div>
    </>
  );
}

Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Expenses;
