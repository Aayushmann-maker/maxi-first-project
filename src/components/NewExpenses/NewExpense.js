import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpensesForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now(),
    };

    props.onAddExpenseData(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
