import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ saveSubmittedExpense }) => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="new-expense">
      {
        openForm
          ? <ExpenseForm saveSubmittedExpense={saveSubmittedExpense} hideForm={setOpenForm} />
          : (
            <button className="form-button" type="button" onClick={() => setOpenForm((open) => !open)}>
              Add New Expense
            </button>
          )
      }
    </div>
  );
};

NewExpense.propTypes = {
  saveSubmittedExpense: PropTypes.func.isRequired,
};

export default NewExpense;
