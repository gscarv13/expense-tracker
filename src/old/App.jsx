import React, { useState } from 'react';
import '../App.css';
import demoExpenses from '../Constants/demoExpenses';
import Expenses from '../Components/Expenses/Expenses';
import NewExpense from '../Components/NewExpense/NewExpense';
import GridContainer from '../Components/UI/GridContainer';
import Balance from '../Components/Balance/Balance';

function App() {
  const [expenses, setExpenses] = useState(demoExpenses);

  const saveExpenseHandler = (submittedExpense) => {
    const expense = {
      ...submittedExpense,
      id: Math.random().toString(),
      date: new Date(submittedExpense.date),
    };

    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div className="App">
      <GridContainer>
        <NewExpense saveSubmittedExpense={saveExpenseHandler} />
        <Balance expenses={expenses} />
        <Expenses items={expenses} />
      </GridContainer>
    </div>
  );
}

export default App;
