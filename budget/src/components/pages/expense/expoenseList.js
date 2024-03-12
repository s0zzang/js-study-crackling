import React, { useState } from "react";
import "./expenseList.css";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./expenseItem";

export default function ExpoenseList({ expense, deleteExpense, handleModify }) {
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
}
