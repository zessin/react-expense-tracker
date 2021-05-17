import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  //The same could also be achieved by using only one state, storing an object as below
  //Some key notes:
  //- the use of spread to copy old values from the previous object
  //- the use of an arrow function receiving the correct previousState

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput((previousState) => {
  //     return {
  //       ...previousState,
  //       title: event.target.value,
  //     };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput((previousState) => {
  //     return {
  //       ...previousState,
  //       amount: event.target.value,
  //     };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput((previousState) => {
  //     return {
  //       ...previousState,
  //       date: event.target.value,
  //     };
  //   });
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const expenseData = {
  //     title: userInput.title,
  //     amount: userInput.amount,
  //     date: new Date(userInput.date),
  //   };

  //   console.log(expenseData);
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            required={true}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            min="0.01"
            step="0.01"
            required={true}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max="2022-12-31"
            required={true}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
