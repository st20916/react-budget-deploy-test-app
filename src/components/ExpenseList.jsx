import React from "react";
import "../styles/expense.css";
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/md";

// ({ }) :: 개별 변수
const ExpenseList = ({ handleDelete, expenses, handleEdit, clearItems }) => {
	return (
		<>
			<ul className="list">
				{/* Expense Item */}
				{/* key 값을 주면 에러 해결 */}
				{expenses.map(expense => {
					return (
						<ExpenseItem
							expense={expense}
							key={expense.id}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					)
				})}
			</ul>
			{expenses.length > 0 && (
				<button 
					type="button" 
					className="btn"
					onClick={clearItems}
				>목록 지우기 <MdDelete className="btn-icon" /></button>
			)}
		</>
	)
}

export default ExpenseList;