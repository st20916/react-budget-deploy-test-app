import React from "react";
import "../styles/expense.css";
import { MdDelete, MdEdit } from 'react-icons/md';

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
	return (
		<li className="item">
			<div className="info">
				<span className="expense">{expense.charge}</span>
				<span className="amount">{expense.amount} 원</span>
			</div>
			<div>
				<button 
					type="button" 
					className="edit-btn" 
					onClick={() => {
					handleEdit(expense.id)
				}}><MdEdit /></button>
				<button
					type="button"
					className="clear-btn"
					onClick={ () =>
						handleDelete(expense.id)
					}
				><MdDelete/>
				</button>
			</div>
		</li>
	)
}

export default ExpenseItem;