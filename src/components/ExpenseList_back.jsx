import React, { Component } from "react";
import "../styles/expense.css";
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/md";

export class ExpenseList extends Component {
	render() {
		return (
			<>
				<ul className="list">
					{/* Expense Item */}
					{/* key 값을 주면 에러 해결 */}
					{this.props.initialExpenses.map(expense => {
						return (
							<ExpenseItem
								expense={expense}
								key={expense.id}
								handleDelete={this.props.handleDelete}
							/>
						)
					})}
				</ul>
				<button type="button" className="btn">목록 지우기 <MdDelete className="btn-icon" /></button>
			</>
		)
	}
}

export default ExpenseList;