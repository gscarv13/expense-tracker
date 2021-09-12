import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';
import { Icon } from '@iconify/react';

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
    <div className="new-expense__container">
      <button className="new-expense__close" type="button" onClick={() => hideForm((open) => !open)}>
        <Icon icon="whh:x" />
      </button>
      <form onSubmit={submitHandler}>
        <div className="new-expense__amount">
          <span className="money">$</span>
          <input id="amount" type="number" min="0.01" step="0.01" onChange={handleInputChange} value={formInput.amount} />
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <Icon icon="whh:stickynote" />
            <input
              id="title"
              type="text"
              value={formInput.title}
              onChange={handleInputChange}
              placeholder="Notes"
              required
            />
          </div>
          <div className="new-expense__control">
            <Icon icon="whh:notesdatealt" />
            <input
              id="date"
              type="date"
              min="2021-01-01"
              onChange={handleInputChange}
              value={formInput.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button className="form-button" type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

ExpenseForm.propTypes = {
  saveSubmittedExpense: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
};

export default ExpenseForm;
