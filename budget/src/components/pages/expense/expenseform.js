/* eslint-disable  */
import { useState } from "react";
import "./expenseform.css";
import { MdSend } from "react-icons/md";

export default function ExpenseForm({
  expense,
  changeExpenses,
  modifyExpense,
}) {
  const [newItem, setNewItem] = useState({ charge: "", amount: "" });
  const id = expense[expense.length - 1]?.id;
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeExpenses({ id: id + 1, ...newItem });
    setNewItem({ charge: "", amount: "" });
  };
  console.log(modifyExpense);

  return (
    <form className="form-wr">
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예)렌트비"
            value={newItem.charge}
            onChange={(e) => handleChange(e)}
            autoFocus
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
            value={newItem.amount}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          제출 <MdSend className="btn-icon" />
        </button>
      </div>
    </form>
  );
}
