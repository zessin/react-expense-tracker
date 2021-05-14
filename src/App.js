import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Nintendo Switch",
      amount: 300,
      date: new Date(2021, 0, 5),
    },
    {
      title: "TV",
      amount: 799.99,
      date: new Date(2021, 1, 10),
    },
    {
      title: "Headset",
      amount: 90,
      date: new Date(2021, 2, 15),
    },
    {
      title: "Keyboard",
      amount: 79.99,
      date: new Date(2021, 3, 20),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
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
