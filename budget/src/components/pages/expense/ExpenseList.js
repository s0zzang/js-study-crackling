import { memo } from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = memo(({ expense, deleteExpense, handleModify }) => {
  const handleDelete = (id) => {
    const newExpense = expense.filter((item) => item.id != id);
    deleteExpense(newExpense);
  };
  const li = expense.map(({ id, charge, amount }) => (
    <ExpenseItem
      key={id}
      id={id}
      charge={charge}
      amount={amount}
      handleDelete={handleDelete}
      handleModify={handleModify}
    />
  ));

  return (
    <div className="list-wr">
      <ul className="list">{li}</ul>
      <button className="btn" onClick={() => deleteExpense([])}>
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </div>
  );
});

export default ExpenseList;
