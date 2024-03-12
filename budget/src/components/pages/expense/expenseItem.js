import React from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import "./expenseitem.css";

export default function ExpenseItem({
  id,
  charge,
  amount,
  modifyExpense,
  handleDelete,
}) {
  return (
    <li className="item" key={id}>
      <div className="info">
        <span className="amount">{charge}</span>
        <span className="expense">{Number(amount).toLocaleString()}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          onClick={() => {
            modifyExpense(id, charge, amount);
          }}
        >
          {/* edit-icons */}
          <LiaEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          {/* delete-icons */}
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}
