import React from "react";
import "./expenseList.css";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./expenseItem";

export default function ExpoenseList({ expense }) {
  // console.log(props.expense);
  const li = expense.map((item) => (
    <ExpenseItem key={item.id} charge={item.charge} amount={item.amount} />
  ));
  return (
    <>
      <ul className="list">{li}</ul>
      <button className="btn">
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </>
  );
}
