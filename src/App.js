import { useState } from 'react';
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from './components/Alert';

const App = () => {
	const [ charge, setCharge ] = useState("");
	const [ amount, setAmount ] = useState(0);
	// [getter, setter] = getter, setter 리턴하고, 초기 state 값을 정하는 Hook
	const [ expenses, setExpenses ] = useState([
		{ id: 1, charge: '렌트비', amount: 1600 },
		{ id: 2, charge: '교통비', amount: 400 },
		{ id: 3, charge: '식비', amount: 1200 },
	]);
	// Alert
	const [ alert, setAlert ] = useState({ show : false });
	// Edit
	const [ id, setId ] = useState('');
	const [ edit, setEdit ] = useState(false);

	// 전체 목록 지우기
	const clearItems = () => {
		setExpenses([]);
	};
	// 
	const handleCharge = (e) => {
		setCharge(e.target.value);
	}
	const handleAmount = (e) => {
		// e.target.value 는 String 이므로, valueAsNumber 로 Number 타입
		setAmount(e.target.valueAsNumber);
	}
	// state를 이용해 지출 목록 삭제
	const handleDelete = (id) => {
		const newExpense = expenses.filter(expense =>
			expense.id !== id
		);
		setExpenses(newExpense);
		handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
	};
	// Alert handle
	const handleAlert = ({ type, text }) => {
		setAlert({ show: true, type, text });
		setTimeout(() => {
			setAlert({ show: false });
		}, 7000);
	};
	// submit
	const handleSubmit = (e) => {
		e.preventDefault();	// 기본 동작 막음.
		// crypto.randomUUID :: 랜덤 UUID 값 생성
		if (charge !== '' && amount > 0) {
			// 수정 시
			if (edit) {
				const newExpense = expenses.map(item => {
					// 수정 중인 item
					// 기존 항목 override
					return item.id === id ? { ...item, charge, amount } : item
				})
				setExpenses(newExpense);
				setEdit(false);
				handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' });
			} else {
				const newExpense = { id: crypto.randomUUID(), charge, amount }
				// 불변성을 지켜주기 위해 새로운 expenses를 생성
				// spread operator
				const newExpenses = [...expenses, newExpense];
				setExpenses(newExpenses);
				handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
			}
			setCharge('');
			setAmount(0);	// 초기화
		} else {
			handleAlert({ type: 'danger', text: 'charge는 빈 값일 수 없으며, amount는 0보다 커야 합니다.' });
		}
	};
	// edit handler
	const handleEdit = (id) => {
		const expense = expenses.find(item => item.id === id);	// find 메서드
		const { charge, amount } = expense;
		setId(id);
		setCharge(charge);
		setAmount(amount);
		setEdit(true);
	};

	return (
		<main className="main-container">
			{alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
			<h1>예산 계산기</h1>
			<div className="cmm-area">
				{/* Expense Form */}
				<ExpenseForm
					handleCharge={handleCharge}
					charge={charge}
					handleAmount={handleAmount}
					amount={amount}
					handleSubmit={handleSubmit}
					edit={edit}
				/>
			</div>
			<div className="cmm-area">
				{/* Expense List */}
				{/* state 사용 */}
				<ExpenseList
					expenses={expenses}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					clearItems={clearItems}
				/>
			</div>
			<div className="cmm-flex-end mt-1">
				<p className="fs-2">
					총 지출 : 
					<span>
						{expenses.reduce((acc, curr) => {
							return (acc += curr.amount);
						}, 0)}
						원
					</span>
				</p>
			</div>
		</main>
	)
}

export default App;