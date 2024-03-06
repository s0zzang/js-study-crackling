/* eslint-disable  */
import { useState } from "react";
import "./expenseform.css";
import { MdSend } from "react-icons/md";

export default function ExpenseForm({ expense, changeExpenses }) {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState();
  const id = expense.length;
  const handleSubmit = (e) => {
    e.preventDefault();
    changeExpenses({ id: id + 1, charge: charge, amount: +amount });
    setCharge("");
    setAmount("");
  };

  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예)렌트비"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="예)100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          제출 <MdSend className="btn-icon" />
        </button>
      </div>
    </form>
  );
}
