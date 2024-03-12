import "./index.css";
import { useState } from "react";
import Expenseform from "./expenseform";
import ExpoenseList from "./expoenseList";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 160000 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);
  const changeExpenses = (item) => setExpenses([...expenses, item]);
  const modifyExpenses = (item) => setExpenses(item);
  const deleteExpense = (item) => setExpenses(item);
  const total = expenses.reduce((a, c) => a + +c.amount, 0);

  const [newItem, setNewItem] = useState({ id: null, charge: "", amount: "" });
  const handleModify = (id) => {
    const {
      0: { charge, amount },
    } = expenses.filter((item) => id === item.id);
    const idx = expenses.findIndex((item) => id === item.id);
    setNewItem({ id, idx, charge, amount });
  };

  return (
    <main className="main-container">
      <h1>내 소비목록 </h1>
      <Expenseform
        expense={expenses}
        changeExpenses={changeExpenses}
        modifyExpenses={modifyExpenses}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <ExpoenseList
        expense={expenses}
        deleteExpense={deleteExpense}
        handleModify={handleModify}
      />
      <div className="result-wr">
        <p>
          총 지출 :{" "}
          <span style={{ fontSize: "1.8rem" }}>{total.toLocaleString()}원</span>
        </p>
      </div>
    </main>
  );
};

export default ExpensePage;
