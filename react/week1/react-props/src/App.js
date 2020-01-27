import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './components/TodoListHeader';
import TodoItems from './components/TodoItems';

const todos = [
	{
		id: 1,
		description: 'Get out of bed',
		deadlineDate: 'Tue Jan 28 2020',
	},
	{
		id: 2,
		description: 'Brush Teeth',
		deadlineDate: 'Wed Jan 29 2020',
	},
	{
		id: 3,
		description: 'Eat breakfast',
		deadlineDate: 'Thursday Jan 30 2020',
	},
];

function App() {
	const maptodos = todos.map(todo => <TodoItems key={todo.id} description={todo.description} deadlineDate={todo.deadlineDate} />)
	return (
		<div>
			<TodoListHeader />
			{maptodos}
		</div>
	);
}

export default App;
