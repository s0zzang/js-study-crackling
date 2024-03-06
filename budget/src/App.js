import { useState } from "react";
import "./App.css";
import Expenseform from "./components/expenseform";
import ExpoenseList from "./components/expoenseList";

function App() {
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 160000 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);
  const changeExpenses = (item) => {
    setExpenses([...expenses, item]);
  };
  // setTotal(expenses.reduce((a, c) => a + c.amount, 0));
  console.log(expenses);

  return (
    <main className="main-container">
      <h1>내 소비목록 </h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "2rem" }}>
        <Expenseform expense={expenses} changeExpenses={changeExpenses} />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "2rem" }}>
        <ExpoenseList expense={expenses} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "2rem" }}
      >
        <p>
          총 지출 : <span style={{ fontSize: "1.8rem" }}>{total}원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
