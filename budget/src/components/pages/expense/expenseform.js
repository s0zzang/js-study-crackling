/* eslint-disable  */
import { MdSend } from "react-icons/md";
import "./ExpenseForm.css";

const ExpenseForm = ({
  expense,
  changeExpenses,
  modifyExpenses,
  inputs,
  setInputs,
}) => {
  const handleChange = (e) => {
    e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { id, idx, charge, amount } = inputs;
    e.preventDefault();

    if (!charge.trim() || !amount) return alert("값을 입력해주세요.");
    if (id) {
      const newExpense = expense.filter((item) => item.id !== id);
      newExpense.splice(idx, 0, { id, charge, amount });
      modifyExpenses(newExpense);
    } else {
      const id = expense[expense.length - 1]?.id + 1 || 1;
      changeExpenses({ ...inputs, id });
    }

    setInputs({ charge: "", amount: "" });
  };

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
            value={inputs.charge}
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
            value={inputs.amount}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          제출 <MdSend className="btn-icon" />
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
