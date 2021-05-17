import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Nintendo Switch",
    amount: 300,
    date: new Date(2019, 0, 5),
  },
  {
    id: 2,
    title: "TV",
    amount: 799.99,
    date: new Date(2020, 1, 10),
  },
  {
    id: 3,
    title: "Mouse",
    amount: 45.99,
    date: new Date(2021, 2, 15),
  },
  {
    id: 4,
    title: "Headset",
    amount: 90,
    date: new Date(2021, 3, 20),
  },
  {
    id: 5,
    title: "Keyboard",
    amount: 79.99,
    date: new Date(2021, 3, 25),
  },
  {
    id: 6,
    title: "Cellphone",
    amount: 300,
    date: new Date(2021, 5, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousState) => {
      return [expense, ...previousState];
    });
  };

  return (
    <div>
      <h2 align="center">Expense Tracker App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
