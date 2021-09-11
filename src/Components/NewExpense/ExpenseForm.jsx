import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';

const ExpenseForm = ({ saveSubmittedExpense, hideForm }) => {
  const initialState = {
    title: '',
    amount: '0.01',
    date: '',
  };
  const [formInput, setFormInput] = useState(initialState);
  const handleInputChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    saveSubmittedExpense(formInput);
    setFormInput(() => ({
      title: '',
      amount: '',
      date: '',
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title
            <input id="title" type="text" value={formInput.title} onChange={handleInputChange} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <input id="amount" type="number" min="0.01" step="0.01" onChange={handleInputChange} value={formInput.amount} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <input id="date" type="date" min="2021-01-01" onChange={handleInputChange} value={formInput.date} />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => hideForm((open) => !open)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  saveSubmittedExpense: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
};

export default ExpenseForm;
