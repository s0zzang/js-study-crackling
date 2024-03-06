import React from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import "./expenseitem.css";

export default function ExpenseItem({ id, charge, amount }) {
  return (
    <li className="item" key={id}>
      <div className="info">
        <span className="amount">{charge}</span>
        <span className="expense">{amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          {/* edit-icons */}
          <LiaEdit />
        </button>
        <button className="clear-btn">
          {/* delete-icons */}
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}
