import React, { Component } from "react";
import "../styles/expense.css";
import { MdDelete, MdEdit } from 'react-icons/md';

export class ExpenseItem extends Component {
	render() {
		return (
			<li className="item">
				<div className="info">
					<span className="expense">{this.props.expense.charge}</span>
					<span className="amount">{this.props.expense.amount} 원</span>
				</div>
				<div>
					<button type="button" className="edit-btn"><MdEdit /></button>
					<button
						type="button"
						className="clear-btn"
						onClick={ () =>
							this.props.handleDelete(this.props.expense.id)
						}
					><MdDelete/></button>
				</div>
			</li>
		)
	}
}

export default ExpenseItem;